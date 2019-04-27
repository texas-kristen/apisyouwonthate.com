import React from 'react';
import { graphql } from 'gatsby';

// bootstrap
import { Container, Col, Row } from 'react-bootstrap';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { VideoFeature } from '../../components/VideoFeature';

import classes from './Videos.module.css';
import { Image } from '../../components/Image';

const VideosPage = ({ data }) => {
  const { videos } = data;
  return (
    <Layout>
      <SEO title="Books" keywords={['apis', 'api', 'rest', 'rpc', 'graphql']} />
      <header className={classes.header}>
        <Container>
          <div className={classes.headerContent}>
            <Row>
              <Col lg={7}>
                <h1>
                  Videos %P Can't Make It To The Big Conferences In Paris,
                  London, Or
                </h1>
                <p>
                  San Francisco? we get it! We've all got local bars to keep up
                  appearances at, bike races to train for, and pet turtles don't
                  feed themselves!
                </p>
                <p>
                  Grab these mini conference talks, and watch then whenever you
                  fancy.
                </p>
              </Col>
              <Col lg={5} className="justify-content-center">
                <Image src="videos-page-header-image.jpg" />
              </Col>
            </Row>
          </div>
        </Container>
      </header>
      <Container>
        {videos.nodes.map((video, i) => {
          return (
            <React.Fragment key={video.id}>
              <VideoFeature video={video} />
            </React.Fragment>
          );
        })}
      </Container>
    </Layout>
  );
};

export default VideosPage;

export const query = graphql`
  {
    videos: allMdx(filter: { frontmatter: { type: { eq: "video" } } }) {
      nodes {
        id
        code {
          body
          scope
        }
        frontmatter {
          title
        }
      }
    }
  }
`;