import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#202942] text-gray-300 mt-24">
  <aside>
    <h2 className='text-2xl font-bold'>Draw<span className='text-[#E76F51]'>Dive</span></h2>
    <p>DrawDive Industries Ltd.<br/>Providing reliable art and craft since 2012</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Comfortable</a>
    <a className="link link-hover">Extra Security</a>
    <a className="link link-hover">Best Price</a>
    <a className="link link-hover">Strategic Location</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <Link to='/contact-us'><a className="link link-hover">Contact</a></Link>
    <Link to='/user-profile'><a className="link link-hover">Profile</a></Link>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control">
        <p className='font-medium mb-3'>Enter your email address</p>
      <div className="sm:join flex flex-col sm:flex-row space-y-2 sm:space-y-0">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn bg-[#E76F51] join-item border-[#E76F51] text-white">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
  );
};

export default Footer;