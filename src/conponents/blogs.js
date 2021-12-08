import React,{Component} from 'react';
import data from '../data.json'
import pic from '../blog.jpg'
// import {writeJsonFile} from 'write-json-file';
//const fs = require('fs');
class Blogs extends Component {
state={
    char:{
        id:0,
        title:'',
        category:'',
        content:'',
        likes:'',
    },
    data:data,
    input:{
        title:'',
        category:'',
        content:'',
    }
};
viewPost=(i)=>{
    console.log(data[i]);
    this.setState({char:data[i]})
}
// inputs={};
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(name,value)
        this.setState({    
            input: Object.assign(
              {}, 
              this.state.input,
              { [name]: value }
            )
          })
    }
    add=()=>{
        var inp={
            id:this.state.data.length+1,
            title:this.state.input.title,
            category:this.state.input.category,
            content:this.state.input.content,
            likes:0
        }
        data.push(inp)
        console.log(data)
        this.setState({data:data})
        
        // fetch('data.json', {
        //     method: 'POST', // or 'PUT'
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //         body: JSON.stringify(inp),
        //     })
        //     .then(response => response.json())
        //     .then(data => {
        //     console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //     console.error('Error:', error);
        //     });
        
    }
    addLike=()=>{
        this.setState({    
            char: Object.assign(
              {}, 
              this.state.char,
              { likes:  this.state.char.likes+1 }
            )
          })
        for(var i=0;i<data.length;i++){
            if(data[i].id === this.state.char.id){
                data[i]=this.state.char
                break
            }
        }
        this.setState({data:data})
    }
    delete=()=>{
        for(var i=0;i<data.length;i++){
            if(data[i].id === this.state.char.id){
                data.splice(i, 1);
                break
            }
        }
        this.setState({data:data})

    }
    handleEdit=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        //console.log(name,value)
        this.setState({    
            char: Object.assign(
              {}, 
              this.state.char,
              { [name]: value }
            )
          })
    }
    edit=()=>{
        for(var i=0;i<data.length;i++){
            if(data[i].id === this.state.char.id){
                data[i]=this.state.char
                break
            }
        }
        this.setState({data:data})
    }
render() {
    return(
        <div id="posts" className="container-fluid">
            <div className="d-lg-flex justify-content-between ">
                <div className="heading">
                    <h1 className="mb-4">Blogs</h1>
                </div>
                <div className="newPost">
                    <button type="button" className="btn btn-info d-flex justify-content-between " data-toggle="modal" data-target="#addModel">
                        <span className="material-icons">
                            add
                        </span>
                        <span>Add Blogs</span>
                    </button>
                </div>
            </div>
            <div>
                <div className="row mb-4 cards">
                    {data.map((product,index) => (
                        <div key={index} className="col-sm-4 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div className="card flex-fill hover-card mb-3">
                                <div className="card-img-container" height="100">
                                    <img className="card-img-top h-100" src={pic} alt="pro" />
                                </div>
                                <div className="card-body shadow">
                                    <span className="badge badge-pill badge-info mb-2">{product.category}</span>
                                    <h5 className="card-title text-truncate mb-1" title={product.title}>
                                        {product.title}
                                    </h5>
                                    <div className="font-weight-light" title={product.catogory}>
                                        {product.catogory}
                                    </div>
                                    <div className="description mt-4 mb-4" title={product.content}>
                                        <p>{product.content}</p>
                                    </div>
                                    <button type="button" className="btn btn-info float-right" data-toggle="modal" data-target="#myModal" onClick={() => this.viewPost(index)}>
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="modal fade" data-bs-backdrop="static" id="myModal" aria-labelledby="myModel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg pr-0">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="exampleModalLabel"><b>{this.state.char.title}</b></h4><br/>
                                <span></span>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="row ml-0 mr-0">
                                    <div className="col-sm-6">
                                        <div className="card-img-container">
                                            <img className="card-img-top " width="100%" height="330" alt="Charachter" src={pic}/>
                                        </div> 
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row ml-0 mr-0 model-des">
                                            <em>{this.state.char.content}</em>
                                        </div>
                                        <div className="row ml-0 mr-0 mt-3">
                                            <div className="col-sm-6 pl-0">
                                                <h6><b>Category</b></h6>
                                            </div>
                                            <div className="col-sm-6 pl-0">
                                                <p>{this.state.char.category}</p>
                                            </div>
                                        </div>
                                        <div className="row ml-0 mr-0 mt-3">
                                            <div className="col-sm-6 pl-0">
                                                <h6><b>Likes</b></h6>
                                            </div>
                                            <div className="col-sm-6 pl-0">
                                                <p>{this.state.char.likes}</p>
                                            </div>
                                        </div>
                                        <div className="row ml-0 mr-0 mt-3 d-flex justify-content-between ">
                                            <div>
                                                <button type="button" className="btn btn-info d-flex justify-content-between" onClick={() => this.addLike()}>
                                                    <span className="material-icons">thumb_up</span>
                                                    <span>Like</span>
                                                </button>
                                            </div>
                                            <div>
                                                <button type="button" className="btn btn-info d-flex justify-content-between" data-toggle="modal" data-target="#editModel">
                                                    <span className="material-icons">edit</span>
                                                    <span>Edit</span>
                                                </button>
                                            </div>
                                            <div>
                                                <button type="button" className="btn btn-info d-flex justify-content-between" data-toggle="modal" data-target="#deleteModel">
                                                    <span className="material-icons">delete</span>
                                                    <span>Delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="modal fade" data-bs-backdrop="static" id="addModel" aria-labelledby="addModel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg pr-0">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Post</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form className="needs-validation" noValidate>
                                    <div className="form-group">
                                        <label>Topic</label>
                                        <input type="text" className="form-control" id="Topic" placeholder="Enter Topic" name="title" 
                                        required value={this.state.input.title} onChange={this.handleChange}/>
                                        <div className="valid-feedback">Valid.</div>
                                        <div className="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <div className="form-group">
                                        <label>Category</label>
                                        <input type="text" className="form-control" id="cate" placeholder="Enter Category" name="category" 
                                        required value={this.state.input.category || ''} onChange={this.handleChange}/>
                                        <div className="valid-feedback">Valid.</div>
                                        <div className="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <div className="form-group">
                                        <label>Category</label>
                                        <textarea className="form-control" rows="5" id="content" name="content" required value={this.state.input.content||''} onChange={this.handleChange}></textarea>
                                        <div className="valid-feedback">Valid.</div>
                                        <div className="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                </form> 
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-info" data-dismiss="modal" onClick={() => this.add()}>Add</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="modal fade" data-bs-backdrop="static" id="editModel" aria-labelledby="editModel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg pr-0">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Post</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form className="needs-validation" noValidate>
                                    <div className="form-group">
                                        <label>Topic</label>
                                        <input type="text" className="form-control" id="Topic" placeholder="Enter Topic" name="title" 
                                        required value={this.state.char.title} onChange={this.handleEdit}/>
                                        <div className="valid-feedback">Valid.</div>
                                        <div className="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <div className="form-group">
                                        <label>Category</label>
                                        <input type="text" className="form-control" id="cate" placeholder="Enter Category" name="category" 
                                        required value={this.state.char.category || ''} onChange={this.handleEdit}/>
                                        <div className="valid-feedback">Valid.</div>
                                        <div className="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <div className="form-group">
                                        <label>Category</label>
                                        <textarea className="form-control" rows="5" id="content" name="content" required value={this.state.char.content||''} onChange={this.handleEdit}></textarea>
                                        <div className="valid-feedback">Valid.</div>
                                        <div className="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                </form> 
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-info" data-dismiss="modal" onClick={() => this.edit()}>Edit</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="modal fade" data-bs-backdrop="static" id="deleteModel" aria-labelledby="deleteModel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg pr-0">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Delete Post</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <h2>Do you want to delete this post</h2>
                            <fieldset disabled="disabled">
                                <form className="needs-validation" disabled>
                                    <div className="form-group">
                                        <label>Topic</label>
                                        <input type="text" className="form-control" id="Topic" placeholder="Enter Topic" name="title" 
                                        required value={this.state.char.title} onChange={this.handleChange}/>
                                        <div className="valid-feedback">Valid.</div>
                                        <div className="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <div className="form-group">
                                        <label>Category</label>
                                        <input type="text" className="form-control" id="cate" placeholder="Enter Category" name="category" 
                                        required value={this.state.char.category || ''} onChange={this.handleChange}/>
                                        <div className="valid-feedback">Valid.</div>
                                        <div className="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <div className="form-group">
                                        <label>Category</label>
                                        <textarea className="form-control" rows="5" id="content" name="content" required value={this.state.char.content||''} onChange={this.handleChange}></textarea>
                                        <div className="valid-feedback">Valid.</div>
                                        <div className="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                </form>
                                </fieldset> 
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-info" data-dismiss="modal" onClick={() => this.delete()}>Delete</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Blogs;