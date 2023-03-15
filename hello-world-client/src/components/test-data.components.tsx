import { useEffect, useState } from "react";
import { FetchServices } from "../services";

type TestDataType = {
    data: {
        greeting: string
    }
}

const TestData = () => {

    const initialState: TestDataType = { data: { greeting: '' } }

    const [getData, setData] = useState(initialState)

    const taskFetchAllData = async () => {
        const response = await FetchServices.postData('');

        console.log(response.data);

        setData(response.data);
    }

    useEffect(() => {
        taskFetchAllData();
    }, []);

    return (
        <>
            {getData?.data?.greeting}
        </>
    )
}

export default TestData;