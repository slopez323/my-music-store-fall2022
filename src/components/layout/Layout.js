import Footer from './Footer';
import Header from './Header';

function Layout(props) {
  const { children } = props;

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <content>{children}</content>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
