import React from "react";
import { Container, Carousel } from "react-bootstrap";
import MultiStepForm from "./MultiStepForm";

const Home = () => {
  // Array to store the image URLs
  const imageUrls = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeX_THY3dyb-o7j4PdiIykecFLSTv67xK6X5FO9323uqwnegc9O3PWIKG23WM5H9MaxC9MmqAdd4eOanz9BD3wEdSqb-n4uO6N7MnCl6nF5AqgPI3fP2I0kY001Ci0iFU8ehBa39FCxQt0JYqPygEMJWBgNluO8k9oUEWVZr_pCT6UqILiB-toujgzUlI/s16000/1.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg67CfrtfTz38udCIFW9ce9GCiK2KOhcx7AA8wFPs5VlnxH2tC7nzFmhmA6oYWa7_krZQCnOekyFs6XkVZNtaQuhs-k_0nvAbiMQYfDWDUe9zLsJOZe5-rMx_TegQwjmdqFlHWv-srukT-6eVmlZmOdMwCDqX8s0siGGslst8gg9P1xtX6uwq_SOxjCstQ/s16000/2.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQ-zqhXcaRUckimHqY9vOc15fFc44FYSnanjyw0JuefDwVlT77TxVAB6XQ00p8wz2zwmo-1QiAKoJRrna9M0r3xjsJnKJiFJfuUCs2rNJoCbmVULmqxypA76l2sCFAYl6Wx0wn9ugiFKQTlzxX3LWF371_YDu-IqEC2ncNn-00IWR7BQbtJ5PxK64tSLI/s16000/4.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzqg8PQCMWtleZYoaajWv-Viq-1Dtg3W_rg4SNu6ioLrpvnn0DWDdHLJ5QKgE6nxkwb3OBt2trANWV9GNvUyYO6BvWC4ih-6eS_iCj-OYvvYigF_iPC8Jrm4PeqPcxTJzvu0fXIPQ-Uq72SMN4fTl9PcLj8lEkAUH90tcwYMD5YjKI8tSPAo0f30F7v3w/s16000/5.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhl0ROxCVOLKQXIVTSrEYf6WSC9IQzu2EmTJ-wwY_peNlwWLhg8xKucNWySF7hpfeRTh4gLi6ADQcRV-DDU-_2WQdNtXgBOhV0fzROaqpCFz0Xv56gdBBTw2VTvsv8AEbZFoafisyaTZ2En84CW0lF_dFcENO4Lob8dF9hD1aIcJTcOIowK4t_piEXJ6ww/s16000/6.png",
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white text-center py-3">
        <h1>Support For Customer</h1>
      </header>

      {/* Slider */}
      <Container className="my-4">
        <Carousel>
          {imageUrls.map((url, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={url}
                alt={`Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* Tagline */}
      <div className="text-center my-3">
        <h2>CUSTOMER CARE FOR INSTANT SUPPORT & SOLUTION</h2>
      </div>

      {/* Multistep Form */}
      <MultiStepForm />
    </div>
  );
};

export default Home;
