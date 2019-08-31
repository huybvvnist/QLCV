import React, { Component } from 'react';

class RightContent extends Component {
    render() {
        return (
            <div className="col-sm-8 right_content">
                <div className="form-group">
                    <label className="title">Tên đơn vị*: </label>
                    <input type="text" name id className="form-control" placeholder="Phòng kỹ thuật" />
                    <label className="title" style={{ border: 'none' }}>Mô tả: </label>
                    <textarea className="form-control" name id rows={3} defaultValue={""} />
                    <label className="title">Trưởng đơn vị*: </label>
                    <input className="form-control" type="search" name id />
                    <label className="title">Danh sách phó đơn vị*:</label>
                    <div className="item">
                        <label htmlFor>Chọn phó đơn vị: </label>
                        <input className="form-control" type="search" name id />
                        <label htmlFor>Nhiệm vụ: </label>
                        <textarea className="form-control" name id rows={3} defaultValue={""} />
                        <div className="action_item">
                            <button type="button" className="btn btn-success">Thêm</button>
                            <button type="button" className="btn btn-primary">Thêm từ file</button>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Họ và tên</th>
                                    <th>Nhiệm vụ</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nguyễn Văn Kiên</td>
                                    <td>Quản lý tài chính</td>
                                    <td>
                                        <div className="action_table">
                                            <button type="button"><i className="fa fa-pencil" aria-hidden="true" /></button>
                                            <button type="reset"><i className="fa fa-trash-o" aria-hidden="true" /></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <label className="title">Danh sách nhân viên*:</label>
                    <div className="item">
                        <label htmlFor>Nhân viên*: </label>
                        <input className="form-control" type="search" name id />
                        <label htmlFor>Nhiệm vụ: </label>
                        <textarea className="form-control" name id rows={3} defaultValue={""} />
                        <div className="action_item">
                            <button type="button" className="btn btn-success">Thêm</button>
                            <button type="button" className="btn btn-primary">Thêm từ file</button>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Họ và tên</th>
                                    <th>Nhiệm vụ</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nguyễn Văn Kiên</td>
                                    <td>Quản lý tài chính</td>
                                    <td>
                                        <div className="action_table">
                                            <button type="button"><i className="fa fa-pencil" aria-hidden="true" /></button>
                                            <button type="reset"><i className="fa fa-trash-o" aria-hidden="true" /></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="action_form">
                        <button type="submit" className="btn btn-success">Lưu</button>
                        <button type="reset" className="btn btn-primary">Hủy</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RightContent;