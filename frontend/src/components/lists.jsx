import React, { useContext, useEffect, useState } from 'react'

import { AuthContext } from '../contexts/auth'
import ListsService from '../services/lists'



const Lists = () => {
  // context
  const { auth } = useContext(AuthContext)
  const [lists, setLists] = useState([])

  // efects
  useEffect(() => {
    ListsService.list(auth.token)
      .then(suc => {
        setLists(suc.lists)
      })
  }, [])

  // render
  return (
    <div className="container">
      <div className="row">
        {lists.map(list => <ListItem key={list.id_list} idList={list.id_list} title={list.title} description={list.description} />)}
      </div>
    </div>
  )
}

const ListItem = ({ idList, title, description }) => {

  // render
  return (
    <div className="col-lg-6">
      <div className="card m-3 border">
        <div className="card-body position-relative">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Total task: X</h6>
          {/* <h6 className="card-subtitle mb-2 text-muted">Total task: X</h6> */}
          <p className="card-text">{description}</p>
          <a href={`/list/${idList}`} className="card-link text-primary">Access</a>
          <a href="#" className="card-link text-danger">Delete</a>
        </div>
      </div>
    </div>
  )

}

export default Lists