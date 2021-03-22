import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';


class MenuBar extends React.Component {
    constructor() {
        super(...arguments);
        // Menu items definition
        this.menuItems = [
            {
                items: [
                    { text: 'New Project' },
                    { text: 'New Timeline' },
                    { text: 'Close Current Timeline' },
                    { text: 'Save Project' },
                    { text: 'Save Project As' },
                    { text: 'Import File' },
                    { text: 'Import Media' },
                    { text: 'Import Timeline' },
                    { text: 'Quick Export' },
                    { text: 'Export Project' },
                ],
                text: 'File'
            },
            {
                items: [
                    { text: 'Cut' },
                    { text: 'Copy' },
                    { text: 'Paste' },
                    { text: 'Undo' },
                    { text: 'Redo' },
                    { text: 'History' }, 
                    { text: 'Insert' },
                    { text: 'Overwrite' }
                ],
                text: 'Edit'
            },
            {
                items: [
                    { text: 'Toolbar' },
                    { text: 'Sidebar' },
                    { text: 'Split' },
                ],
                text: 'Clip'
            },
            {
                items: [
                    { text: 'Play Reverse' },
                    { text: 'Stop' },
                    { text: 'Play Forward' },
                    { text: 'Pause/Start Playback' },
                    { text: 'Play Again' },
                    { text: 'Fast Reverse' },
                    { text: 'Fast Forward' },
                ],
                text: 'Sequence'
            },
            {
                items: [
                    { text: 'Mark In' },
                    { text: 'Mark Out' },
                    { text: 'Mark Clip' }
                ],
                text: 'Markers'
            },
            {
                items: [
                    { text: 'Color Correct' },
                    { text: 'Video Effects' },
                    { text: 'Transitions' }, 
                    { text: 'Text Media' },
                    { text: 'OpenGL Render Mode'}
                ],
                text: 'Graphics'
            },
            {
                items: [
                    { text: 'Show' },
                    { text: 'Hide' },
                    { text: 'Switch View' }
                ],
                text: 'View'
            },
            {
                items: [
                    { text: 'Minimize' },
                    { text: 'Maximize' },
                    { text: 'Hide Selected Window' }
                ],
                text: 'Window'
            },
            { text: 'Help' },
            
        ];
    }
    render() {
        return (<MenuComponent items={this.menuItems}/>);
    }
}

export default MenuBar; 