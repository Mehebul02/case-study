import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosCommon from "./useAxiosCommon";

const useSubmit = () => {
  const { user ,loading,} = useAuth();
const axiosCommon = useAxiosCommon()
  const { data:mySubmits=[],isLoading ,refetch} = useQuery({
    queryKey: ["mySubmit",user?.email],
    enabled:!loading && !!user?.email,
    queryFn:async()=>{
        const {data} =await axiosCommon.get(`/my-submit/${user?.email}`)
        return data
    }
    
  });
  return [mySubmits,isLoading,refetch]
};

export default useSubmit;
