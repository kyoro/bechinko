import { NextPageContext } from 'next'
import { useEffect, useState } from 'react'

type UserData = {
  id: string | undefined
  name: string | undefined
}

type Props = {
  userData: UserData
}

const UserPage = ({userData}: Props) => {
  const [kyoroInfo, setKyoroInfo] = useState<UserData>({
    id: undefined,
    name: undefined,
  })

  useEffect(() => {
    fetch('http://localhost:3000/api/hello/kyoro')
      .then((res) => res.json())
      .then((data: UserData) => {
        setKyoroInfo(data)
      })
  }, [])

  return (
    <div>
      <h1>User info</h1>
      <p>id: {userData.id}</p>
      <p>name: {userData.name}</p>
      <h1>Kyoro info</h1>
      <p>id: {kyoroInfo.id}</p>
      <p>name: {kyoroInfo.name}</p>
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
