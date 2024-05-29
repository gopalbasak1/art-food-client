import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useRole = () => {

    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data, isLoading} = useQuery({
        queryKey:['data', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async()=>{
            const {data} = await axiosSecure(`/user/${user?.email}`)
            return data
        }
    })

    //Fetch user info using logged in user email
      
        return [data, isLoading]

};

export default useRole;

