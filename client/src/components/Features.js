import React from "react";
import { BsFillFileEarmarkFill, BsFillDatabaseFill } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";

const Features = () => {
  return (
    <div className="features-container">
      <div className="upper">
        <p className="gray q-data">
          "File sharing is our radio; that's the way people hear our stuff."
        </p>
        <p className="gray q-author">- Guy Picciotto</p>
        <div>
          <p className="gray light">
            Simply upload a file, share the link, and after it is downloaded,
            the file is completely deleted. Our server log files contain no
            personal identifying information. All uploaded files are permanently
            deleted once they have been downloaded or reached their expiration
            date. We do not maintain backups of shared files.
          </p>
          <p className="gray">
            All files are encrypted when stored on our servers.
          </p>
          <div className="icons">
            <BsFillFileEarmarkFill className="icon" />
            <BiTransferAlt className="icon" />
            <BsFillDatabaseFill className="icon" />
          </div>
        </div>
      </div>
      <div className="lower">
        <div className="row">
          <img
            src="https://img.freepik.com/premium-photo/anonymous-hacker-typing-computer-generative-ai_893571-1182.jpg?w=900"
            className="img"
          />
          <div className="text">
            <p className="title">Anonymous</p>
            <p className="desc">
              We don't track you. We don't track your data.
            </p>
            <p className="content">
              We value privacy and we know that you do, too. Our focus is on
              providing a cool file sharing service, not aggregating or selling
              your personal data for profit. Users are not required to create an
              account or provide any personal information in order to upload or
              download files.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="text">
            <p className="title">Free</p>
            <p className="desc">
              Free to use with no gotchas and no hidden fees.
            </p>
            <p className="content">
              No account or credit card is required to get started. Simply
              upload your files and share the link. Your wallet will be
              none-the-lighter! Just so we are all 100% clear here: When you
              share a file, data is being transferred between your computer or
              phone and our servers, then from our servers to your friend’s
              device. The cost of that data transfer is covered by your internet
              service or the data plan on your phone.
            </p>
          </div>
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-anime-kawaii-illustration_52683-121227.jpg?w=740&t=st=1689095365~exp=1689095965~hmac=a62ef1f2acee67ed3311029827f2b9b8c05b225a5afe77f62b8e0157f0ea3821"
            className="img"
          />
        </div>
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60 "
            className="img"
          />
          <div className="text">
            <p className="title">Convenient</p>
            <p className="desc">
              Share any type of file you like, with anyone, anywhere in the
              world.
            </p>
            <p className="content">
              Generous data transfer rates and file size limits ensure even big
              files can be shared expeditiously. Once you have uploaded your
              files and shared the link, you can rest easy knowing that the file
              will not linger indefinitely in the cloud. As soon as it has been
              received by the intended recipient, your file is gone forever!
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Features;
