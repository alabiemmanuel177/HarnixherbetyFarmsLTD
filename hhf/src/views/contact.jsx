import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="contact">
            <div className="background">
                <img
                    src="/images/chicken.jpg"
                    alt=""
                    width="100%"
                    />
            </div>
            <div className="text">
                <h1>Contact Us</h1>
                <h3>If you need our help, have questions about how to use the platform
                <br/> are experiencing technical difficulties,
                please do not hesitate to contact us.</h3>
            </div> 
        </div>
        <div className="container1">
            <div className="row">       
                <form id="contact-form" method="post" action="" role="form">
                <div className="controls">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="form_name">Firstname *</label>
                                <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="form_lastname">Lastname *</label>
                                <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="form_email">Email *</label>
                                <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="form_phone">Phone</label>
                                <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Please enter your phone"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label for="form_message">Message *</label>
                                <textarea id="form_message" name="message" className="form-control" placeholder="Message for me *" rows="4"></textarea>
                            </div>
                        </div>
                    <div className="col-md-12">
                        <input type="submit" className="btn btn-success btn-send" value="Contact Us"/>
                    </div>
                </div>         
                </div>
                </form>
            </div>
        </div> 
        <div className="space"></div>
        <div className="faqtext">
            <h1>Still have a question?</h1>
            <h2>If you cannot find answer to your question in our FAQ, you can always contact us.<br/> We wil answer to you shortly!</h2>
        </div>
        <div className="faq">
            <div className="sales">
                <img src="/icons/question.png" alt="" height="80px" width="80px"/>
                <h2>Sales</h2>
                <h3>We'd love to discuss how we can invest money in our farm</h3>
                <a href='mailto:info@HarnixHerbety.com'>info@HarnixHerbety.com</a><br/>
                <p>09012345678</p>
            </div>
            <div className="faqpage">
                <img src="/icons/deal.png" alt="" height="80px" width="80px"/>
                <h2>View FAQ Page</h2>
                <h3>We're here to help with any questions or issues.</h3>
                <button type="">View FAQ</button>
            </div>
        </div>
        
    </div>
            
        )
        }

export default Contact