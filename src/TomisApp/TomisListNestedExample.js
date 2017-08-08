import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ListItemExpandable from './List/ListItemExpandable';
import TomisFontIcon from './TomisFontIcon';

const TomisListSimpleExample = props =>
    <List>
        <ListItem button={true} divider={true}>
            <ListItemIcon>
                <TomisFontIcon name="inbox" />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button={true} divider={true}>
            <ListItemIcon>
                <TomisFontIcon name="drafts" />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
        </ListItem>
        <ListItemExpandable>
            <ListItemIcon>
                <TomisFontIcon name="person" />
            </ListItemIcon>
            <ListItemText primary="Expandable?" secondary="Click it" />
            <List>
                <ListItem button={true} divider={true}>
                    <ListItemIcon>
                        <TomisFontIcon name="content_copy" />
                    </ListItemIcon>
                    <ListItemText primary="Copy" />
                </ListItem>
                <ListItem button={true} divider={true}>
                    <ListItemIcon>
                        <TomisFontIcon name="event_note" />
                    </ListItemIcon>
                    <ListItemText primary="Note" />
                </ListItem>
                <ListItemExpandable>
                    <ListItemText primary="Level 2 Menu" />
                    <List>
                        <ListItem button={true} divider={true}>
                            <ListItemIcon>
                                <TomisFontIcon name="android" />
                            </ListItemIcon>
                            <ListItemText primary="Android" />
                        </ListItem>
                        <ListItem button={true} divider={true}>
                            <ListItemIcon>
                                <TomisFontIcon name="search" />
                            </ListItemIcon>
                            <ListItemText primary="Search" />
                        </ListItem>
                    </List>
                </ListItemExpandable>
            </List>
        </ListItemExpandable>
    </List>;

export default TomisListSimpleExample;