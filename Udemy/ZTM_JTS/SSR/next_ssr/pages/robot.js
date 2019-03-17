import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


const Robot = ({robot}) => {
    return (
        <div>
            <h3>{robot.username}</h3>
        </div>
    )
};

Robot.getInitialProps = async function (context) {
    const id = context.query.id;
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await resp.json();
    return {
        robot: data
    }
};

export default Robot;