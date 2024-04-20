import { DocumentListTypes } from '@/src/lib/types/DocumentListTypes.ts'
import { DocumentListDB } from './DocumentListDB.json'

export const DocumentList = () => {
    return (
        <>

            <div className="mt-[200px] flex items-center ">
                <div className="flex flex-col gap-5">
                    <h2 className="text-[40px] font-bold text-[#174496]">Успейте вовремя</h2>
                    <p className="text-[20px] text-[#174496] font-bold mb-[10px]">Для подачи заявления необходимо заполнить анкету и подготовить полный пакет следующих отсканированных документов:</p>

                        {
                            DocumentListDB.map((item: DocumentListTypes, index: number) => (
                                <div key={index}>
                                  <p className="text-[18px] mb-[10px]">{item.title}</p>
                                </div>
                            ))
                        }

                </div>
                <img className="w-[600px]" src="./assets/document.jpg" alt="Document List" />
            </div>
        </>
    )
}
