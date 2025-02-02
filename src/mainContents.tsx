import App from "./App"
import { useQuery } from "@tanstack/react-query";


const fetchData = async () => {
    const sheetId = "1Zz3RbfH51ppbKgKL1LvXg6W5wzCB78PpqoWK0trHdr0";
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;

    const response = await fetch(url)
        .then(res => res.text())
        .then(data => {
            const match = data.match(/\{.*\}/s);
            if (!match) {
                return {};
            }
            // JSONP形式なので不要な部分を削除
            const json = JSON.parse(match[0]);
            return json.table.rows;
        });

    console.log(response);
    return response;
};

export const MainContents = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchData,
        staleTime: Infinity,
        gcTime: Infinity,
    });

    if (isLoading) return <p>Loading...</p>;

    console.log(data);

    return <App />
}