/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getMuiTheme } from 'material-ui/styles';
import AppBars from './AppBars';
import AutoCompletes from './AutoCompletes';
import Avatars from './Avatars';
import Badges from './Badges';
import BottomNavigations from './BottomNavigations';
import Buttons from './Buttons';
import Cards from './Cards';
import Chips from './Chips';
import DatePickers from './DatePickers';
import Dialogs from './Dialogs';
import Dividers from './Dividers';
import Drawers from './Drawers';
import GridLists from './GridLists';
import Icons from './Icons';
import Lists from './Lists';
import Menus from './Menus';
import Papers from './Papers';
import Popovers from './Popovers';
import Progresses from './Progresses';
import SelectFields from './SelectFields';
import Sliders from './Sliders';
import Switches from './Switches';
import Snackbars from './Snackbars';
import Steppers from './Steppers';
import Subheaders from './Subheaders';
import TableEditable from './TableEditable';
import Tables from './Tables';
import Tabs from './Tabs';
import TextFields from './TextFields';
import TimePickers from './TimePickers';
import Toolbars from './Toolbars';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { Table, TableBody, TableHeader, TableFooter, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
// import tomisTheme from '../app/themes/tomisLightTheme.js';
import tomisTheme from '../app/themes/muiLightTheme.js';
/* custom font icons */
import './css/font-icons/styles.css';

// const reqThemes = require.context('../.themes/', true, /.json/);
// const themesList = [];
// reqThemes.keys().forEach(filename => {
//   themesList.push(reqThemes(filename));
// });

const theme = getMuiTheme(tomisTheme);

storiesOf('MUI', module)
  .addDecorator(story => {
    const storyKind = story();
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '60%', maxWidth: 1000, minWidth: 600 }}>
          <MuiThemeProvider muiTheme={theme}>
            {storyKind}
          </MuiThemeProvider>
        </div>
      </div>
    );
  })
  .add('AppBar', () => {
    return <AppBars />;
  })
  .add('AutoComplete', () => {
    return <AutoCompletes />;
  })
  .add('Avatar', () => {
    return <Avatars />;
  })
  .add('Badge', () => {
    return <Badges />;
  })
  .add('Bottom Navigation', () => {
    return <BottomNavigations />;
  })
  .add('Buttons', () => {
    return <Buttons />;
  })
  .add('Cards', () => {
    return <Cards />;
  })
  .add('Chip', () => {
    return <Chips />;
  })
  .add('Date Picker', () => {
    return <DatePickers />;
  })
  .add('Dialog', () => {
    return <Dialogs />;
  })
  .add('Divider', () => {
    return <Dividers />;
  })
  .add('Drawer', () => {
    return <Drawers />;
  })
  .add('Grid List', () => {
    return <GridLists />;
  })
  .add('Icon', () => {
    return <Icons />;
  })
  .add('List', () => {
    return <Lists />;
  })
  .add('Menus', () => {
    return <Menus />;
  })
  .add('Paper', () => {
    return <Papers />;
  })
  .add('Popover', () => {
    return <Popovers />;
  })
  .add('Progress', () => {
    return <Progresses />;
  })
  .add('Select Field', () => {
    return <SelectFields />;
  })
  .add('Slider', () => {
    return <Sliders />;
  })
  .add('Switches', () => {
    return <Switches />;
  })
  .add('Snackbar', () => {
    return <Snackbars />;
  })
  .add('Stepper', () => {
    return <Steppers />;
  })
  .add('Subheader', () => {
    return <Subheaders />;
  })
  .add('Tabs', () => {
    return <Tabs />;
  })
  .add('Text Field', () => {
    return <TextFields />;
  })
  .add('Time Picker', () => {
    return <TimePickers />;
  })
  .add('Toolbar', () => {
    return <Toolbars />;
  })
  .add('Table', () => {
    return <Tables />;
  });

// .add('Table, Editable', () => {

//   return <TableEditable />;

// })

// .add('Table Read-Only in Panel', () => {

//   return (

//     <div>

//       <Table

//         height={tableState.height}

//         fixedHeader={tableState.fixedHeader}

//         fixedFooter={tableState.fixedFooter}

//         selectable={tableState.selectable}

//         multiSelectable={tableState.multiSelectable}

//       >

//         <TableHeader displaySelectAll={tableState.showCheckboxes} adjustForCheckbox={tableState.showCheckboxes} enableSelectAll={tableState.enableSelectAll}>

//           <TableRow>

//             <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>

//             <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>

//             <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>

//           </TableRow>

//         </TableHeader>

//         <TableBody

//           displayRowCheckbox={tableState.showCheckboxes}

//           deselectOnClickaway={tableState.deselectOnClickaway}

//           showRowHover={tableState.showRowHover}

//           stripedRows={tableState.stripedRows}

//         >

//           {tableData.map((row, index) => (

//             <TableRow key={index} selected={row.selected}>

//               <TableRowColumn>{index}</TableRowColumn>

//               <TableRowColumn>{row.name}</TableRowColumn>

//               <TableRowColumn>{row.status}</TableRowColumn>

//             </TableRow>

//           ))}

//         </TableBody>

//       </Table>

//     </div>

// );

// });