import Button from "@app/components/Button";
import Heading from "@app/components/Heading";
import Subheading from "@app/components/Subheading";
import '@app/styles/Upload.css'
import CloudUpload from '@app/assets/lucide/cloud-upload.svg'


export default function Moment51() {

  return (
    <>
      <Heading>Add some photos of your work</Heading>
      <Subheading>Upload a minimum of 5 photos to continue</Subheading>

      <div className="upload-container">
        <img src={CloudUpload} alt="upload cloud icon" className="upload-icon"/>
        <p className="upload-text">Upload your file(s) here</p>
        <p className="upload-size">JPG, PNG, up to 2MB per file</p>
        <Button primary>Browse Files</Button>
      </div>
    </>
  )
}