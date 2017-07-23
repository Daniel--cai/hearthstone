import React from 'react';
import styles from './Fileviewer.scss';
import Sidebar from 'site/Sidebar'
import Topbar from 'site/Topbar'
import Body from 'site/Body'
var FontAwesome = require('react-fontawesome');

export default class Fileviewer extends React.Component {

    constructor(props){
        super(props);

    }
    componentDidMount() {
      
    }
    render(){
        return (
            <div className={styles.fileviewer}>
                <table>

                    <tbody>
                    <tr>
                    <th></th>
                     <th>name</th>
                      <th>size</th>
                       <th>compression</th>
                        <th>status</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td><FontAwesome name='folder-open-o' size='2x'/></td>
                        <td>Accounting Docs</td>
                         <td>100mb</td>
                          <td>200%</td>
                           <td>Downloading</td>
                           <td><FontAwesome name='ellipsis-h'/><FontAwesome name='cog'/><FontAwesome name='close'/></td>
                    </tr>
                    <tr>
                        <td><FontAwesome name='folder-open-o' size='2x'/></td>
                        <td>Camera Uploads</td>
                    <td></td>
                          <td></td>
                           <td></td>
                           <td><FontAwesome name='ellipsis-h'/><FontAwesome name='cog'/><FontAwesome name='close'/></td>
                    </tr>
                    <tr>
                       <td><FontAwesome name='folder-open-o' size='2x'/></td>
                        <td>Pied Piper Docs</td>
                         <td></td>
                          <td></td>
                           <td></td>
                           <td><FontAwesome name='ellipsis-h'/><FontAwesome name='cog'/><FontAwesome name='close'/></td>
                        </tr>    
                        </tbody>                 
                 </table>
            </div>

        )
    }
}