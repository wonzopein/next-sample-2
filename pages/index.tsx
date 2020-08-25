import Link from 'next/link'
import Layout from '../components/Layout'
import styled from "styled-components";

const Background = styled.div`
  margin: 15px;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 15px;
`;
const RowContainer = styled.div`
  display: flex;
  flex-flow: row;
  margin-bottom: 15px;
`;


type ContainerType = {
    flow?:string,
    marginRight?:boolean,
    marginLeft?:boolean
}
const Container = styled.div<ContainerType>`
    display: flex;
    margin-left: ${props => props.marginLeft? '15px':'0px'};
    margin-right: ${props => props.marginRight? '15px':'0px'};
    flex-grow: 1;
    padding: 15px;
    background: #fff;
  
`;



const IndexPage = () => {

    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <Background>
                <ColumnContainer>
                    <Container>
                        <h1>Hello Next.js 👋</h1>
                        <p>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </p>
                    </Container>
                </ColumnContainer>
                <RowContainer>
                    <Container marginRight={true}>
                        <h1>Hello Next.js 👋</h1>
                        <p>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </p>
                        <h1>Hello Next.js 👋</h1>
                        <p>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </p>
                    </Container>
                    <Container>
                        <h1>Hello Next.js 👋</h1>
                        <p>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </p>
                    </Container>
                </RowContainer>

                <ColumnContainer>
                    <Container>
                        <h1>Hello Next.js 👋</h1>
                    </Container>
                </ColumnContainer>
            </Background>
        </Layout>
    );
}


export default IndexPage;