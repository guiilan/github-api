import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.css'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import { Alert } from 'bootstrap';

export default function Home() {

  const [profile, setProfile] = useState()
  const [userInput, setUserInput] = useState()


  async function obterUsuario(userName) {
    await api.get(userName).then((res) => {
      setProfile(res.data)
    }).catch(function (error){
      alert("Usuário Não Encontrado")
      setProfile(null)
    })
  }


  return (
    <>
      <div className="header col-lg-12">
        <Form className="input">
          <Form.Group className="col-lg-3 form-input" controlId="exampleForm.ControlInput1">
            <Form.Control size="lg" type="text" placeholder="Your GitHub User" onChange={e => setUserInput(e.target.value)} />
          </Form.Group>
          <Button onClick={() => obterUsuario(userInput)} className="btn-form" variant="secondary" size="lg">
            Pesquisar
          </Button>
        </Form>
      </div>
      {
        profile ?
          <div className="col-lg-12 body-res">
            <div className="card-res">
              <aside className="container-imagem">
                <div className="circle">
                  <img src={profile.avatar_url}></img>
                </div>
              </aside>
              <aside className="container-info">
                <p>
                  Nome
                </p>
                <h4>
                  {profile.name}
                </h4>

                <p>
                  Link GitHub
                </p>
                <h4>
                  {profile.html_url}
                </h4>

                <p>
                  Quantidade de Repositórios
                </p>
                <h4>
                  {profile.public_repos}
                </h4>

              </aside>
            </div>
            <div className="container-btns">
              <Button className="btn-form" variant="secondary" size="lg" type="submit">
                <Link to={{
                  pathname: "/repos",
                  state: { user: profile.login }
                }}>Repos</Link>
              </Button>
              <Button className="btn-form" variant="secondary" size="lg" type="submit">
              <Link to={{
                  pathname: "/starred",
                  state: { user: profile.login }
                }}>Starred</Link>
              </Button>
            </div>
          </div>
          :
          null
      }
    </>
  )
}
