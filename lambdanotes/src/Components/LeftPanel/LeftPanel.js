import React, { Component } from 'react';
import { Label } from '../AtomComps/Label';
import { Button } from '../AtomComps/Button';
import * as Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;

export default class LeftPanel extends Component {
  scrollToAddNotes = () => {
    scroll.scrollTo(2000);
  };
  scrollToTop = () => {
    scroll.scrollTo(0);
  };

  render() {
    return (
      <div className="LeftPanelContents">
        <Label fontSize="45px" name="Lambda Notes" />
        <div onClick={this.scrollToTop}>
          <Button btnName="View Your Notes" />
        </div>
        <div onClick={this.scrollToAddNotes}>
          <Button btnName="+ Create New Note" />
        </div>
      </div>
    );
  }
}
