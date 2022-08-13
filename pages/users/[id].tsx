import { NextPageContext } from 'next'

type Props = {
  userData: {
    id: string
    name: string
  }
}

const UserPage = ({userData}: Props) => {
  return (
    <div>
      <h1>User info</h1>
      <p>id: {userData.id}</p>
      <p>name: {userData.name}</p>
    </div>
  )
}

export async function getServerSideProps({query}: NextPageContext){
  const res = await fetch(`http://localhost:3000/api/hello/${query.id}`)
  const json = await res.json()

  return {
    props: {
      userData: json
    }
  }
}

export default UserPage
