import { Col, Pagination, Row } from "antd";
import React from "react";


import UpcomingMovies from "../../component/movie-slider/UpcomingMovies/UpcomingMovies";



export default function Home() {
  
  return (
    <div>
    {/* <Row gutter={[16,16]} >
      <Col>
     
   <PopularMovies/>
      </Col>
    </Row> */}
    <Row gutter={[16,16]}>
      <Col>
      
   <UpcomingMovies />
       </Col>
    </Row>
    <Row style={{marginTop:32}} justify='center'>
     <Col>
     <Pagination  defaultPageSize={20}  />
     </Col>
   </Row>
    </div>
  );
}
