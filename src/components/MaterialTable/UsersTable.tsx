import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from "@mui/material"
import { IUser } from "../../store/types"
import styles from './styles.module.scss'
import LoadingBanner from "../UI/LoadingBanner/LoadingBanner"
import ErrorBanner from "../UI/ErrorBanner/ErrorBanner"
import CustomPagination from "./CustomPagination"
interface IMaterialTable{
  data: IUser[]
  onChangePage:(page:number) => void
  page:number
  maxPages:number
  isLoading:boolean
  isError:boolean
}

const createNormalBirthDate = (date:string) => {
 
  const bDate = new Date(date)
  const year = +bDate.getFullYear()
  const month = +bDate.getMonth() + 1
  const day = +bDate.getDate()
  return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year}`
}

function MaterialTable({data,onChangePage,page,maxPages,isLoading,isError}:IMaterialTable) {
  
  if(isLoading){
    return(
      <Paper className={styles.table}>
        <LoadingBanner/>
      </Paper>
    )
  }
  if(isError || data?.length === 0){
    return(
      <Paper className={styles.table}>
        <ErrorBanner errorText="Ошибка получения пользователей" />
      </Paper>
    )
  }
  console.log(data)
  return (
    <TableContainer className={styles.table} component={Paper}>
        <Table sx={{height:'100%'}}>
            <TableHead className={styles.tableHeader}>
                <TableRow>
                    <TableCell className={styles.tableHeaderCell} align="left"><span className={styles.tableHeaderCell} >ID</span></TableCell>
                    <TableCell className={styles.tableHeaderCell} align="center"><span className={styles.tableHeaderCell} >Имя</span></TableCell>
                    <TableCell className={styles.tableHeaderCell} align="center"><span className={styles.tableHeaderCell} >Телефон</span></TableCell>
                    <TableCell className={styles.tableHeaderCell} align="center"><span className={styles.tableHeaderCell} >Дата рождения</span></TableCell>
                </TableRow>
            </TableHead>
            <TableBody >
              {data.map((row,id) => (
                <TableRow key={id} className={styles.tableBodyRow} >
                  <TableCell align="left">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">
                    {`${row.firstName} ${row.lastName}`}
                  </TableCell>
                  <TableCell align="center">
                    {row.phone}
                  </TableCell>
                  <TableCell align="center">
                    {createNormalBirthDate(row.birthDate)}
                  </TableCell>
                </TableRow>
              ))
              }
              {Array.from({length: 9 - data.length}).map((_, index) => (
                <TableRow key={`empty-${index}`} className={styles.tableBodyRowEmpty}>
                  <TableCell colSpan={2} sx={{borderBottomWidth:0}} />
                </TableRow>
              ))}
            </TableBody>
            <TableFooter 
            >
              <TableRow>
                <TableCell colSpan={4} align="center">
                  <CustomPagination
                    count={maxPages}
                    page={page}
                    onPageChange={(newPage:number) => onChangePage(newPage)}
                  />
                </TableCell>
              </TableRow>
            </TableFooter>
        </Table>
    </TableContainer>
  )
}

export default MaterialTable
