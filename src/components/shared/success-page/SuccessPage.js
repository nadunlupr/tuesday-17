import { useParams } from 'react-router';
function SuccessPage(props) {
    const { id } = useParams();
    return (
        <div>
            <div>
                <h1>Record saved successfully</h1>
                <p>Record ID: {id}</p>
            </div>
        </div>
    )
}

export default SuccessPage;