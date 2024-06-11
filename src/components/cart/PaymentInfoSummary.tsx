import InfoItem from './InfoItem';
import { CardPaymentInfo } from '../../@types/checkout';

interface PaymentInfoSummaryProps {
  payment: CardPaymentInfo;
}

function PaymentInfoSummary({ payment }: PaymentInfoSummaryProps) {
  const { cardNumber, expiryDate } = payment;
  return (
    <div className="py-2">
      <div className="text-lg font-semibold mb-5">Payment Info</div>
      <InfoItem label="Card Number" value={cardNumber} />
      <InfoItem label="Expiry Date" value={expiryDate} />
    </div>
  );
}

export default PaymentInfoSummary;
