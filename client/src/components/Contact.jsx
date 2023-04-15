import React from "react";
import { Container, Row, Col, Table,Image } from "react-bootstrap";
import {FiPhoneCall} from 'react-icons/fi'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineMobile} from 'react-icons/ai'
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              fugit illo sunt, odit alias pariatur aliquam, voluptas fuga culpa
              sint adipisci eligendi eum ab consectetur vitae beatae ex ducimus
              sit ratione nisi officiis esse? Quod dolorum fugit sequi dicta rem
              velit dolores earum similique impedit nulla unde, eum, adipisci
              porro reiciendis magni, autem ipsum iste atque perspiciatis
              facere? Recusandae perferendis nulla minima quod ab, sapiente
              consequuntur, veniam, adipisci sint ipsa voluptate harum
              cupiditate eius necessitatibus veritatis. Ea suscipit ipsa,
              dolores vero nostrum quae mollitia quos, minima inventore
              repellendus explicabo aliquam iure error, voluptates sit ratione.
              Amet qui iure, velit facilis error delectus sapiente fuga
              temporibus beatae a ut iusto mollitia officiis, natus consectetur
              hic eum sed perspiciatis modi eligendi commodi aliquid corporis.
              Magnam voluptas atque sit adipisci repudiandae eveniet provident
              consectetur dolorem laborum vel, ipsum ducimus doloribus
              recusandae tenetur, fugit, quis mollitia voluptatum deleniti 
            
            </p>
            <Table striped bordered hover className="text-center" >
      <thead>
        <tr>
          <th className="bg-warning text-center " colSpan={3}>
            ----Contact Us----
            </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><FiPhoneCall/></td>
          <td>phone</td>
          <td>0123-456789</td>
        </tr>     <tr>
          <td><AiOutlineMobile/></td>
          <td>call</td>
          <td>0123-456789</td>
        </tr>     <tr>
          <td><MdOutlineEmail/></td>
          <td>Email</td>
          <td>help@fooddelivery.com</td>
        </tr>

      </tbody>
    </Table>
          </Col>
          <Col md={6}>
          <Image src="images/contactus.jpeg" style={{width:"100%",height:"100%"}} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
