import './Layout.css';
import './Left_section';
import Left_section from './Left_section';
import Middle from './Middle';
import Right_section from './Right_section';

function Layout(){
    return (
        <div class="main">
            <Left_section/>
            <Middle />
            <Right_section/>
        </div>
    )
}

export default Layout;