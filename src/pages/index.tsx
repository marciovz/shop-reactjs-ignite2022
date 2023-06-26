import { styled } from "../styles"

const Container = styled('div', {
  width: 900,
  margin: '0 auto',
  background: '$background',
  height: 600
})

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius:4,
  border: 0,
  padding: '4px 8px',
})


export default function Home() {
  return (
    <Container>
      <h1>Hello World</h1>
      <Button>Enviar</Button>
    </Container>
  )
}
