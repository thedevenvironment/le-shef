import styled from 'styled-components/native'
import { Link } from 'expo-router'

interface Props {
  href: string
  text: string
}

export default function Button({ href, text }: Props) {
  return (
    <Link href={href}>
      <S.Button>
        <S.Text>{text}</S.Text>
      </S.Button>
    </Link>
  )
}

const S = {
  Button: styled.TouchableOpacity`
    padding: 10px 50px;
    background-color: #000;
    align-items: center;
    border-radius: 15px;
    margin: 20px auto;
  `,
  Text: styled.Text`
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
  `
}
