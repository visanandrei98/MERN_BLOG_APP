import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import http from '../lib/http';
import formatDate from '../lib/formatDate';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


const Home = () => {
  const [posts, setPosts] = useState([]); 
  useEffect(() => {
     async function fetchData() {
      const { data } = await http.get('/')
      setPosts(data.data.posts);
    
    }
    fetchData();
  }, []);

  
  return (
    <>
    <Nav className="me-auto">
            <Button variant="danger" className=" btn btn-primary m-3"><Nav.Link href="/posts/new">New</Nav.Link></Button>
          </Nav>
      <Container className="my-5" style={{ maxWidth: '800px' }}>
        <Image
          src="avatar.jpeg"
          width="150"
          style={{ borderRadius: '50%' }}
          className="d-block mx-auto img-fluid"
        />
        <h2 className="text-center">Welcome to the News blog</h2>
      </Container>
      <Container style={{ maxWidth: '800px' }}>
        <ListGroup variant="flush" as="ol">
          {
            posts.map((post) => {
              return (
                <ListGroup.Item key={post._id}> 
                  <div className="fw-bold h3">
                    <Link to={`/posts/${post._id}`} style={{ textDecoration: 'none', color: 'black' }}>{post.title}</Link>
                  </div>
                  <div>{post.author} - <span className="text-secondary">{formatDate(post.createdAt)}</span></div>
                </ListGroup.Item>
              );
            })
          }
        </ListGroup>
      </Container>
    </>
  );
};

export default Home;