
// Variables
// ============
// Define paths used within this gulp file

let paths = {
    tmp: '.tmp',
    dev: '_dev',
    prod: '_prod'
};


// Reqs
// ============
// Load plugins in packages.json automatically

let gulp = require('gulp'),
    fs = require('fs'),
    wiredep = require('wiredep').stream,
    argv = require('yargs').argv,
    gulpsync = require('gulp-sync')(gulp),
    spawn = require('child_process').spawn,
    plugins = require('gulp-load-plugins')({
        pattern: ['*'],
        replaceString: /\bgulp[\-.]/,
        lazy: true,
        camelize: true,
		scope: ['devDependencies']
    });


// Component directories
// ============
// Builds a list of directories in components

let oldComponents = [];

gulp.task('component-directories', (cb) => {
    oldComponents = JSON.parse(fs.readFileSync('_dev/components/component-list.json')).components;
    cb();
});


// Create component
// ============
// Creates a variety of favicons, setup first in 'tasks' folder

gulp.task('create-component', (cb) => {

    let newComponents = JSON.parse(fs.readFileSync('_dev/components/component-list.json')).components;

    let difference = function difference(arr1, arr2, val1, val2) {
        let diff = [];

        arr1.forEach((arr1Val) => {
            let checkedMatch = true;

            arr2.forEach((arr2Val) => {
                if (arr2Val[val1] === arr1Val[val1]) checkedMatch = false;
            });

            if (checkedMatch === true) diff.push([arr1Val[val1], arr1Val[val2]]);
        });

        return diff;
    }

    let newComponentsDiff = difference(newComponents, oldComponents, 'name', 'description');

    class createComponent {

        constructor(componentName, componentDesc) {
            let properName;
            this.properName = componentName;
            this.componentName = componentName.toLowerCase().split(' ').join('-').toString();
            this.componentDesc = componentDesc.toString();
        }

        buildComponent() {

            if (this.componentName !== 'untitled folder' && this.componentName !== 'New folder') {

                let pugContents =
                    `
//- ${this.properName}
//- ============
//- ${this.componentDesc}

//- Includes

mixin ${this.properName}()
    
    .${this.properName}
`;

                let sassContents =
                    `
// ${this.properName}
// ============
// ${this.componentDesc}

.${this.properName} {

}`;

                let jsContents =
                    `
// ${this.properName}
// ============
// ${this.componentDesc}

// Imports
import React from 'react';

class ${this.properName} extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="${this.properName}">
                <p>${this.properName} loaded!</p>
            </div>
        );
    }
}

// Exports
export default ${this.properName};
`;

                let testContents =
                    `
// ${this.properName}
// ============
// ${this.componentDesc}

// Imports
import React from 'react';
import renderer from 'react-test-renderer';
import ${this.properName} from './${this.properName}';

describe('${this.properName} renders correctly', () => {
    it('renders correctly', () => {
        const props = {};
        const rendered = renderer.create(
            <${this.properName} props={props} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
`;

                let makeDirectory = new Promise((resolve, reject) => {
                    plugins.mkdirp(paths.dev + '/components/' + this.properName), resolve();
                });

                makeDirectory.then(() => {
                    fs.writeFile(paths.dev + '/components/' + this.properName + '/_' + this.properName + '.pug', pugContents);
                    fs.writeFile(paths.dev + '/components/' + this.properName + '/_' + this.properName + '.scss', sassContents);
                    fs.writeFile(paths.dev + '/components/' + this.properName + '/' + this.properName + '.js', jsContents);
                    fs.writeFile(paths.dev + '/components/' + this.properName + '/' + this.properName + '.test.js', testContents);
                });
            }
        }
    }

    newComponentsDiff.forEach((thisComponent) => {

        let thisName = thisComponent[0];
        let thisDesc = thisComponent[1];

        let newCreateComponent = new createComponent(thisName, thisDesc);
        newCreateComponent.buildComponent();
    });

    cb();
});
