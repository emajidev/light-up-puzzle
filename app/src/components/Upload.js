import React, { useState, useContext } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { FaFileUpload } from 'react-icons/fa';
import Preview from './Preview';
import { Context } from '../contexts/StateContext'

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState();
  const [, setGlobalState] = useContext(Context)
  const [matriz, setMatriz] = useState();

  const changeHandler = (event) => {

    setSelectedFile(event.target.files[0]);
    var fr = new FileReader();
    fr.onload = function () {
      setMatriz(fr.result.toString())
    }

    fr.readAsText(event.target.files[0]);

  };

  const handleSubmission = async () => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3IiwianRpIjoiOTQ4YTA4MWEwMTZiYzg0Y2Y3Njk1NGIyYmUxOThkNzBjNmUyMDU5ZTMyNGIyM2U3OTZlOGU0MWIzMmY5NTE2ZTQ1MWE1YTBmZDgwMTcxM2UiLCJpYXQiOjE2MTk4MDk3MDksIm5iZiI6MTYxOTgwOTcwOSwiZXhwIjoxNjUxMzQ1NzA5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.EeBr3FbTOOfYg5xw8o3PExWj9_ZP4RbbLYe7Wtcne-RmN-e8VzrJXueuoCbXPh4BGPC_3Z-BIm_NmcKGvzOZsh2XbTwRMmnBHCTVJhxeYKiFiBSw_cekvVC9oyVqER6P_LFFEDm6c6kdtrscnn4tQa9x0DyCa5TMwcgamvLsSnRP1O2-IOnrQlmhDJNbxuBecsvO8lq62mre8iKNnhySSbRsHpS2oaTjSPMZsrLzr3A0RZD2JCYUw_7LZpYKoCfpc70Q33Jx1Ebi4SuItYVQiffG8bidrH4knyGD9UE81DtR5wa8TuDHszIPW_G9bIwXoiWoxVYNgTLru6nAJnecP-wigWE-MBSr0Yv5IxIx2BNGXV30sg4Y1WgVh5536wVUB08FraBtHBrmjjGd0wmz4CSyGr6vcvrZ5IluJYAxHzUHb0GDbfdlkIb2gJes1Im7iPRwEOBcRi7qdcpf04B1Bgy6QMxcVYmX4aTXmQaulC1W4ObxDEf2-an1SFSxgcJpLPD9fnSABGfwfiGcI7StguaL0qDHLAOBplsj9GpZbcNfSITcPaFS9-VOdNE6NKQ3WyeDe4WH4klmfPgXnHWTumezxhKnv-YS7ArJNGhEt9sJRG9tbq4T0PE_Xf619wyU28mim89RJ1nWSIOzxMpSW3-E--CKZs4GAuf2Pk9QTww");
    myHeaders.append("Accept", "application/json");

    var formdata = new FormData();
    formdata.append("file", selectedFile, "matriz.txt");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    const response = await fetch("http://localhost:3030/api/upload", requestOptions)
    const result = await response.json();
    setGlobalState({ matriz: JSON.parse(matriz) ,solution: result.solution})
  };


  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <div style={{ ...blackScreen, ...centered }}>
          {matriz ? (
            <Preview matriz_array={matriz} />
          ) : (
            <FaFileUpload size="100" />
          )}
        </div>
        <Card.Text variant="dark" style={{ background: "#efb300" }}>Vista previa</Card.Text>
        <Card.Body  >
          <Card.Title style={{ color: "#efb300", fontWeight: "bold" }}>Subir archivo</Card.Title>
          <Card.Text variant="dark" >
            Carga el archivo txt con la matriz a resolver y presiona Go! para calcular.
            </Card.Text>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" onChange={changeHandler} />
          </Form.Group>
          <Button variant="warning" onClick={handleSubmission}>Go!</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
const blackScreen = {
  width: "100%", height: 200, background: "#888"
}
const centered = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

