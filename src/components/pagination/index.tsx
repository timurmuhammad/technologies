import { getPaginationItems } from './pagination';
import PageLink from './PageLink';
import './pagination.scss';
import arrow from '../../shared/icons/arrow_pagination.svg'

export type Props = {
    currentPage: number;
    lastPage: number;
    maxLength: number;
    setCurrentPage: (page: number) => void;
};

export default function Pagination({
    currentPage,
    lastPage,
    maxLength,
    setCurrentPage,
}: Props) {
    const pageNums = getPaginationItems(currentPage, lastPage, maxLength);

    return (
        <nav className="pagination" aria-label="Pagination">
        <PageLink
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
        >
            <img src={arrow.src} alt="icon" />
            Prev
        </PageLink>
        {pageNums.map((pageNum, idx) => (
            <PageLink
            key={idx}
            active={currentPage === pageNum}
            disabled={isNaN(pageNum)}
            onClick={() => setCurrentPage(pageNum)}
            >
            {!isNaN(pageNum) ? pageNum : '...'}
            </PageLink>
        ))}
        <PageLink
            disabled={currentPage === lastPage}
            onClick={() => setCurrentPage(currentPage + 1)}
        >
            Next
            <img src={arrow.src} alt="icon" />
        </PageLink>
        </nav>
    );
}
























// import { useRef, useState } from 'react'
// import styles from './pagination.module.scss'
// import arrowPagination from '../../shared/icons/arrow_pagination.svg'

// type Props = {
//     amountPages: number
//     currentPage: number
//     setCurrentPage: (currentPage: number) => void
// }

// export const Pagination: React.FC<Props> = ({ amountPages, currentPage, setCurrentPage }) => {
//     const pageRef = useRef(1)

//     function forward() {
//         currentPage < amountPages - 1 && setCurrentPage(currentPage + 1)
//         pageRef.current = currentPage
//     }
//     function back() {
//         currentPage > 0 && setCurrentPage(currentPage - 1)
//         pageRef.current = currentPage
//     } 

//     const onClickPage = (current: number) => {
//         setCurrentPage(current)
//         console.log(true)

//     }
//     console.log(pageRef.current)

//     return <div className={styles.wrapper}>
//         {
//             [...new Array(amountPages)].map((item, index) => {
//                 return index === 0 ? <div className={styles.item}>
//                     <div 
//                             className={styles.first}
//                             key={index}
//                         >
//                             <div className={currentPage > 0 ? styles.switch : styles.switch_not_click} onClick={() => back()}><img src={arrowPagination.src} className={styles.arrow} alt="icon" />Prev</div>
//                             <p onClick={() => onClickPage(index)} className={currentPage === index ? styles.number_active : styles.number}>{index + 1}</p>
//                         </div>
//                     </div>

//                     : index > 0 && index < amountPages - 1 && index === 1 ? <div className={styles.item}>
//                         <p 
//                             className={currentPage > 0 && currentPage < amountPages - 1 ? styles.number_active : styles.number}
//                             onClick={() => {
//                                 onClickPage(pageRef.current)
//                             }}
//                         >{currentPage > 0 && currentPage < amountPages - 1 ? currentPage + 1 : pageRef.current + 1}</p>
//                     </div>

//                     : amountPages - 1 === index ? <div className={styles.item}>
//                         <div 
//                             className={styles.last}
//                             key={index}
//                         >
//                             <p onClick={() => onClickPage(index)} className={currentPage === index ? styles.number_active : styles.number}>{index + 1}</p>
//                             <div className={amountPages - 1 > currentPage ? styles.switch : styles.switch_not_click} onClick={(event) => {forward()}}>Next<img className={styles.arrow} src={arrowPagination.src} alt="icon" /></div>
//                         </div>
//                         </div>
//                     : null
//             })
//         }
//     </div>
// }