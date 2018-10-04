import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic03 from '../assets/images/pic03.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Elements = (props) => (
    <Layout>
        <Helmet>
            <title>Elements - Forty by HTML5 UP</title>
            <meta name="description" content="Elements Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Elements</h1>
                    </header>

                    <h2 id="content">Sample Content</h2>
                    <p>Praesent ac adipiscing ullamcorper semper ut amet ac risus. Lorem sapien ut odio odio nunc. Ac adipiscing nibh porttitor erat risus justo adipiscing adipiscing amet placerat accumsan. Vis. Faucibus odio magna tempus adipiscing a non. In mi primis arcu ut non accumsan vivamus ac blandit adipiscing adipiscing arcu metus praesent turpis eu ac lacinia nunc ac commodo gravida adipiscing eget accumsan ac nunc adipiscing adipiscing.</p>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <h3>Sem turpis amet semper</h3>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat commodo eu sed ante lacinia. Sapien a lorem in integer ornare praesent commodo adipiscing arcu in massa commodo lorem accumsan at odio massa ac ac. Semper adipiscing varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                        </div>
                        <div className="col-6">
                            <h3>Magna odio tempus commodo</h3>
                            <p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor. Ante commodo blandit adipiscing integer semper orci eget. Faucibus commodo adipiscing mi eu nullam accumsan morbi arcu ornare odio mi adipiscing nascetur lacus ac interdum morbi accumsan vis mi accumsan ac praesent.</p>
                        </div>
                        <div className="col-4">
                            <h3>Interdum sapien gravida</h3>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                        </div>
                        <div className="col-4">
                            <h3>Faucibus consequat lorem</h3>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                        </div>
                        <div className="col-4">
                            <h3>Accumsan montes viverra</h3>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                        </div>
                    </div>

                    <hr className="major" />

                    <h2 id="elements">Elements</h2>
                    <div className="grid-wrapper">
                        <div className="col-6">

                                <h3>Text</h3>
                                <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
                                This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
                                This is <u>underlined</u> and this is code: <code>for (;;)</code>.
                                Finally, this is a <a href="#">link</a>.</p>
                                <hr />
                                <h2>Heading Level 2</h2>
                                <h3>Heading Level 3</h3>
                                <h4>Heading Level 4</h4>
                                <hr />
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>

                                <h3>Lists</h3>
                                <div className="grid-wrapper">
                                    <div className="col-6">

                                        <h4>Unordered</h4>
                                        <ul>
                                            <li>Dolor etiam magna etiam.</li>
                                            <li>Sagittis lorem eleifend.</li>
                                            <li>Felis dolore viverra.</li>
                                        </ul>

                                        <h4>Alternate</h4>
                                        <ul className="alt">
                                            <li>Dolor etiam magna etiam.</li>
                                            <li>Sagittis lorem eleifend.</li>
                                            <li>Felis feugiat viverra.</li>
                                        </ul>

                                    </div>
                                    <div className="col-6">

                                        <h4>Ordered</h4>
                                        <ol>
                                            <li>Dolor etiam magna etiam.</li>
                                            <li>Etiam vel lorem sed viverra.</li>
                                            <li>Felis dolore viverra.</li>
                                            <li>Dolor etiam magna etiam.</li>
                                            <li>Etiam vel lorem sed viverra.</li>
                                            <li>Felis dolore viverra.</li>
                                        </ol>

                                        <h4>Icons</h4>
                                        <ul className="icons">
                                            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                                            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                                            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                                            <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
                                            <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                                            <li><a href="#" className="icon fa-tumblr"><span className="label">Tumblr</span></a></li>
                                        </ul>
                                        <ul className="icons">
                                            <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                                            <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                                            <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                                        </ul>

                                    </div>
                                </div>
                                <h4>Definition</h4>
                                <dl>
                                    <dt>Item1</dt>
                                    <dd>
                                        <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
                                    </dd>
                                    <dt>Item2</dt>
                                    <dd>
                                        <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
                                    </dd>
                                    <dt>Item3</dt>
                                    <dd>
                                        <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
                                    </dd>
                                </dl>

                                <h4>Actions</h4>
                                <ul className="actions">
                                    <li><a href="#" className="button special">Default</a></li>
                                    <li><a href="#" className="button">Default</a></li>
                                </ul>
                                <ul className="actions small">
                                    <li><a href="#" className="button special small">Small</a></li>
                                    <li><a href="#" className="button small">Small</a></li>
                                </ul>
                                <div className="grid-wrapper">
                                    <div className="col-6">
                                        <ul className="actions vertical">
                                            <li><a href="#" className="button special">Default</a></li>
                                            <li><a href="#" className="button">Default</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="actions vertical small">
                                            <li><a href="#" className="button special small">Small</a></li>
                                            <li><a href="#" className="button small">Small</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="actions vertical">
                                            <li><a href="#" className="button special fit">Default</a></li>
                                            <li><a href="#" className="button fit">Default</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="actions vertical small">
                                            <li><a href="#" className="button special small fit">Small</a></li>
                                            <li><a href="#" className="button small fit">Small</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <h4>Pagination</h4>
                                <ul className="pagination">
                                    <li><span className="button small disabled">Prev</span></li>
                                    <li><a href="#" className="page active">1</a></li>
                                    <li><a href="#" className="page">2</a></li>
                                    <li><a href="#" className="page">3</a></li>
                                    <li><span>&hellip;</span></li>
                                    <li><a href="#" className="page">8</a></li>
                                    <li><a href="#" className="page">9</a></li>
                                    <li><a href="#" className="page">10</a></li>
                                    <li><a href="#" className="button small">Next</a></li>
                                </ul>

                                <h3>Blockquote</h3>
                                <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis.</blockquote>

                                <h3>Table</h3>

                                <h4>Default</h4>
                                <div className="table-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Item1</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item2</td>
                                                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item3</td>
                                                <td> Morbi faucibus arcu accumsan lorem.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item4</td>
                                                <td>Vitae integer tempus condimentum.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item5</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="2"></td>
                                                <td>100.00</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <h4>Alternate</h4>
                                <div className="table-wrapper">
                                    <table className="alt">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Item1</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item2</td>
                                                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item3</td>
                                                <td> Morbi faucibus arcu accumsan lorem.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item4</td>
                                                <td>Vitae integer tempus condimentum.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item5</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="2"></td>
                                                <td>100.00</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>

                        </div>
                        <div className="col-6">

                                <h3>Buttons</h3>
                                <ul className="actions">
                                    <li><a href="#" className="button special">Special</a></li>
                                    <li><a href="#" className="button">Default</a></li>
                                </ul>
                                <ul className="actions">
                                    <li><a href="#" className="button big">Big</a></li>
                                    <li><a href="#" className="button">Default</a></li>
                                    <li><a href="#" className="button small">Small</a></li>
                                </ul>
                                <ul className="actions">
                                    <li><a href="#" className="button special big">Big</a></li>
                                    <li><a href="#" className="button special">Default</a></li>
                                    <li><a href="#" className="button special small">Small</a></li>
                                </ul>
                                <ul className="actions fit">
                                    <li><a href="#" className="button special fit">Fit</a></li>
                                    <li><a href="#" className="button fit">Fit</a></li>
                                </ul>
                                <ul className="actions fit small">
                                    <li><a href="#" className="button special fit small">Fit + Small</a></li>
                                    <li><a href="#" className="button fit small">Fit + Small</a></li>
                                </ul>
                                <ul className="actions">
                                    <li><a href="#" className="button special icon fa-search">Icon</a></li>
                                    <li><a href="#" className="button icon fa-download">Icon</a></li>
                                </ul>
                                <ul className="actions">
                                    <li><span className="button special disabled">Special</span></li>
                                    <li><span className="button disabled">Default</span></li>
                                </ul>

                                <h3>Form</h3>

                                <form method="post" action="#">
                                    <div className="grid-wrapper">
                                        <div className="col-6">
                                            <div className="mb-5"><input type="text" name="demo-name" id="demo-name" defaultValue="" placeholder="Name" /></div>
                                        </div>
                                        <div className="col-6">
                                            <div className="mb-5"><input type="email" name="demo-email" id="demo-email" defaultValue="" placeholder="Email" /></div>
                                        </div>
                                        <div className="col-12">
                                            <div className="select-wrapper mb-5">
                                                <select name="demo-category" id="demo-category">
                                                    <option defaultValue="">- Category -</option>
                                                    <option value="1">Manufacturing</option>
                                                    <option value="1">Shipping</option>
                                                    <option value="1">Administration</option>
                                                    <option value="1">Human Resources</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-5">
                                                <input type="radio" id="demo-priority-low" name="demo-priority" defaultChecked />
                                                <label htmlFor="demo-priority-low">Low</label>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-5">
                                                <input type="radio" id="demo-priority-normal" name="demo-priority" />
                                                <label htmlFor="demo-priority-normal">Normal</label>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-5">
                                                <input type="radio" id="demo-priority-high" name="demo-priority" />
                                                <label htmlFor="demo-priority-high">High</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="mb-5">
                                                <input type="checkbox" id="demo-copy" name="demo-copy" />
                                                <label htmlFor="demo-copy">Email me a copy</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="mb-5">
                                                <input type="checkbox" id="demo-human" name="demo-human" defaultChecked />
                                                <label htmlFor="demo-human">I am a human</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-5">
                                                <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <ul className="actions">
                                                <li><input type="submit" value="Send Message" className="special" /></li>
                                                <li><input type="reset" value="Reset" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>

                                <h3>Image</h3>

                                <h4>Fit</h4>
                                <span className="image fit"><img src={pic03} alt="" /></span>
                                <div className="box alt">
                                    <div className="grid-wrapper">
                                        <div className="col-4"><span className="image fit"><img src={pic08} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic09} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic10} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic10} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic08} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic09} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic09} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic10} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic08} alt="" /></span></div>
                                    </div>
                                </div>

                                <h4>Left &amp; Right</h4>
                                <p><span className="image left"><img src={pic09} alt="" /></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget tempus vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis.</p>
                                <p><span className="image right"><img src={pic10} alt="" /></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget tempus vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis.</p>

                                <h3>Box</h3>
                                <div className="box">
                                    <p>Felis sagittis eget tempus primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Magna sed etiam ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum.</p>
                                </div>

                                <h3>Preformatted</h3>
                                <pre><code>i = 0;

                                print 'It took ' + i + ' iterations to sort the deck.';
                                </code></pre>

                        </div>
                    </div>

                </div>
            </section>

        </div>

    </Layout>
)

export default Elements