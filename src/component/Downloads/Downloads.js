import React from "react";
import { Document, Page } from 'react-pdf';
import pdfFile from '../../assets/Catelogue.pdf';
import { Button } from "antd";

const Downloads = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfFile;
        link.download = 'myfile.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (
        <>
            <div className="container">
                <div className="item">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card" style={{width: "18rem"}}>
                                <img
                                    src="https://www.simpolo.net/pdf/vitrified/prozzo-matt.jpg"
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <p class="card-text">Prozzo Matt Carving Collection</p>
                                    <Button  onClick={() => handleDownload()}>
                                            Download
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Downloads;
