import React, { Component } from 'react';
import ItemPanel from './LeftItem/ItemPanel';

class LeftContent extends Component {

  constructor(props){
    super(props);
  }
    render() {
        return (
            <div className="col-sm-4 left_content">
                <h4 className="title">Sơ đồ cơ cấu tổ chức</h4>
                <button type="button" class="btn add_department">Thêm phòng ban chính</button>
                <div className="panel-group" id="accordionMenu" role="tablist" aria-multiselectable="true">
                {this.props.data.map((item) => {
              return(
                  <ItemPanel tieude = {item.name}/>
              );
            })}
                    
                </div>
            </div>
        );
    }
}

export default LeftContent;