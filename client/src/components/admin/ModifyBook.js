// Importing the necessary packages.
import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from '../common/SideBar';

/**
 *
 */ 
class ModifyBook extends Component {
  render() {
    return (
        <div>
            <Header userLoggedIn="true" />
            <div class="wrapper">
                <div class="container">
                    <div class="row">
                        <SideBar />
                        <div class="span9">
                            <div class="module span6 offset1">
                                <form class="form-vertical">
                                    <div class="module-head">
                                        <h3>Please Enter the Book Information</h3>
                                    </div>
                                    <div class="module-body">
                                        <div class="control-group">
                                            <div class="controls row-fluid">
                                                <input class="span12" type="text" id="bookName" placeholder="Book Name" required />
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <div class="controls row-fluid">
                                                <input class="span12" type="text" id="authorName" placeholder="Author Name" required />
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <div class="controls row-fluid">
                                                <input class="span12" type="text" id="edition" placeholder="Edition" required />
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <div class="controls row-fluid">
                                                <input class="span12" type="text" id="publication" placeholder="Publication" required />
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <div class="controls row-fluid">
                                                <input class="span12" type="text" id="publicationYear" placeholder="Publication Year" required />
                                            </div>
                                        </div>         
                                        <div class="control-group">
                                            <div class="controls row-fluid">
                                                <input class="span12" type="text" id="quantity" placeholder="Quantity" required />
                                            </div>
                                        </div>                                                                                                              
                                    </div>
                                    <div style={{marginLeft: '20px'}}>
                                        <label class="control-label"><b>Select Image From Your Computer</b></label>
                                        <input type="file" class="file" accept="image/*" required/>
                                        <br /><br />            
                                    </div>
                                    <div class="module-foot">
                                        <div class="control-group">
                                            <div class="controls clearfix">
                                                <button type="" class="btn btn-primary pull-right">Cancel</button>
                                                <button type="submit" class="btn btn-primary pull-right" style={{marginRight: '10px'}}>OK</button>
                                                <button type="" class="btn btn-primary pull-left">Remove Book</button>                                
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>         
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default ModifyBook;