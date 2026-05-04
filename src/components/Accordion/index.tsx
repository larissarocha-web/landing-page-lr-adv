// Hook para controle de estado (abrir/fechar itens)
import { useState } from 'react'

// Importa os estilos do accordion
import {
  AccordionContainer,
  AccordionContent,
  AccordionItem,
  AccordionTitle,
} from './styles'

// Importa ícones de seta
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from 'react-icons/io'

// Componente principal
export function Accordion() {
  // Controla qual item está aberto
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  // começa com o primeiro aberto (boa prática UX)

  // Função que abre/fecha item
  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <AccordionContainer>
      {/* ITEM 1 */}
      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(0)}>
          {/* Ícone muda conforme estado */}
          {openIndex === 0 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Qual é o foco principal da sua empresa de advocacia?
        </AccordionTitle>

        <AccordionContent isOpen={openIndex === 0}>
          {/* Conteúdo exibido quando aberto */}
          Nossa empresa de advocacia concentra-se principalmente em direito
          empresarial, civil, trabalhista e tributário...
        </AccordionContent>
      </AccordionItem>

      {/* ITEM 2 */}
      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(1)}>
          {openIndex === 1 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Como posso agendar uma consulta jurídica?
        </AccordionTitle>

        <AccordionContent isOpen={openIndex === 1}>
          Para agendar uma consulta...
        </AccordionContent>
      </AccordionItem>

      {/* ITEM 3 */}
      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(2)}>
          {openIndex === 2 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Quais áreas a empresa atende clientes corporativos?
        </AccordionTitle>

        <AccordionContent isOpen={openIndex === 2}>
          Para nossos clientes corporativos...
        </AccordionContent>
      </AccordionItem>

      {/* ITEM 4 */}
      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(3)}>
          {openIndex === 3 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Como sua empresa aborda a resolução de conflitos?
        </AccordionTitle>

        <AccordionContent isOpen={openIndex === 3}>
          Nossa abordagem busca soluções...
        </AccordionContent>
      </AccordionItem>

      {/* ITEM 5 */}
      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(4)}>
          {openIndex === 4 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Como posso acompanhar o progresso do meu processo legal?
        </AccordionTitle>

        <AccordionContent isOpen={openIndex === 4}>
          Oferecemos uma abordagem transparente...
        </AccordionContent>
      </AccordionItem>

      {/* ITEM 6 */}
      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(5)}>
          {openIndex === 5 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Como são determinados os honorários da sua empresa?
        </AccordionTitle>

        <AccordionContent isOpen={openIndex === 5}>
          Nossos honorários são determinados...
        </AccordionContent>
      </AccordionItem>
    </AccordionContainer>
  )
}
