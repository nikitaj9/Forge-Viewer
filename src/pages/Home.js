import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material/'
import Viewer from './Viewer/Viewer';

class Home extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='viewer-home'>
                <AppBar position="static" style={{marginBottom: 25}}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            CCtech Presents
                        </Typography>
                        <Button color="inherit">Animation</Button>
                    </Toolbar>
                </AppBar>

                <Viewer/>
            </div>
        )
    }
}

export default Home;