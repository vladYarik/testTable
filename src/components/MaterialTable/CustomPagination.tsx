import classNames from 'classnames';
import styles from './styles.module.scss'
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';

interface ICustomPagination{
    count:number
    page:number
    onPageChange:(newPage: number) => void;
}

function CustomPagination({count,page,onPageChange}:ICustomPagination) {
    
 
    const getPages = (count:number):{id:number, value:string}[] => {
        const arrayFromCount = Array.from({length:count},(_,i) => ({
            id:i,
            value:`${i+1}`
        }))
        if(arrayFromCount.length <= 5){
            return arrayFromCount
        }else{
            return arrayFromCount.slice(arrayFromCount.length - page <=5 ? (arrayFromCount.length-5) : page,page+5)
        }
    }
    
  return (
    <div className={styles.pagination_container}>
        <ArrowCircleLeft 
            onClick={() => {
                page > 0 ? onPageChange(page-1) : null
            }}
            style={{fontSize:40,color:'#827cde'}}
         />
       

        <div className={styles.pagination_list}>
            {getPages(count).map((elem,id) => 
                <div onClick={() => onPageChange(id === 4 ? count-1 : elem?.id)} key={id} className={classNames(styles.pagination_elem, {[styles.pagination_elem__active]:page === elem.id})}>
                    {id === 3
                        ?
                        count - page <= 5
                            ?
                            elem.id+1
                            :
                            '...'
                        :
                        id === 4
                            ?
                            count
                            :
                            elem.id+1
                    }
                </div>
            )
                
            }

        </div>
        <ArrowCircleRight 
          onClick={() => {
            count > page+1 ? onPageChange(page+1) : null
        }}
            style={{fontSize:40,color:'#827cde'}}
         />
    </div>
  )
}

export default CustomPagination
