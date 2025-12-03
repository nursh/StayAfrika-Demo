import Counter from "@app/components/Counter";
import Heading from "@app/components/Heading";


export default function Moment72() {

  return (
    <>
      <Heading>Name your activity and tell your guest more</Heading>
          <div className="content-container">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="e.g. Guided nature walk etc"
                />
                <p>0/45</p>
              </div>
      
              <div className="form-group">
                <label htmlFor="experience">Experience</label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={5}
                  placeholder="e.g. Take a relaxed walk through nearby trails while learning about local plants, birds and landmarks from your host"
                />
                <p>0/200</p>
              </div>
      
              <div className="guest-counter">
                <p>Minutes</p>
                <Counter initValue={30} step={30} />
              </div>
            </div>
    </>
  )
}