import { useSearchParams } from "react-router-dom"
import MaterialTable from "../components/MaterialTable/UsersTable"
import Title from "../components/UI/Title/Title"
import MainLayout from "../layouts/MainLayout/MainLayout"
import { useGetUsersQuery } from "../store/APIs/tableApi"
import { useEffect } from "react"
import { useAppSelector } from "../store/hooks"
import { selectUsersTableLimit } from "../store/slices/UsersSlice"


export default function HomePage() {
 
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '0';
  const limit = useAppSelector(selectUsersTableLimit)
  const {data,isError,isLoading} = useGetUsersQuery({limit:limit,skip:+page * limit},{refetchOnMountOrArgChange:true})
  

  const handleChangePage = (page:number) => {
    setSearchParams({ page: `${page}` });

  }
  useEffect(() => {

  },[])
  return (
    <MainLayout>
      <Title text="Таблица пользователей" />
     
          <MaterialTable
            isLoading={isLoading}
            isError={isError}
            onChangePage={handleChangePage}
            page={+page}
            data={data?.users || []}
            maxPages={data?.total ? Math.ceil(data?.total/limit) : 0}
          />
      
    
    </MainLayout>
  )
}
