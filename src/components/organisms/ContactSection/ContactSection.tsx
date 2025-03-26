'use client';

import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';
import { iconMap } from '@/components/atoms/Icon';
import Input from '@/components/atoms/Input';
import Textarea from '@/components/atoms/Textarea';
import InfoItem from '@/components/molecules/InfoItem';
import SectionWrapper from '@/components/molecules/SectionWrapper';
import ModalOrDrawer from '@/components/organisms/ModalOrDrawer';
import { InfoItemType } from '@/types/component';
import { ContactSectionDataType } from '@/types/data';
import clsx from 'clsx';
import { useState } from 'react';

export interface ContactSectionProps {
  data: ContactSectionDataType;
}

const ContactSection = ({ data }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState<'success' | 'error'>('success');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setModalMessage(
          'Thanks for reaching out! I will get back to you within 24 hours.'
        );
        setModalType('success');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        throw new Error(data.error || 'Failed to send email');
      }
    } catch (err: any) {
      setModalMessage(
        'Hmm, something went wrong. If the issue persists, email me at: hello@zackdolin.com.'
      );
      setModalType('error');
    } finally {
      setLoading(false);
      setModalOpen(true);
    }
  };

  return (
    <SectionWrapper
      className="mb-6"
      iconType={data.categoryIcon as keyof typeof iconMap}
      category={data.category}
      heading={data.heading}
      body={data.body}
    >
      <div className="flex flex-col xl:flex-row xl:justify-between">
        <div
          className={clsx(
            'mb-8 flex grow flex-col justify-between rounded-2xl sm:px-8 md:flex-row md:px-4 md:py-8 lg:px-12 xl:mb-0 xl:mr-8 xl:flex-col xl:px-8',
            'border-gray-300 py-2 dark:border-gray-800 sm:border'
          )}
        >
          {data.infoList.map((item: InfoItemType, index: number) => (
            <InfoItem
              className={clsx(
                '[&:not(:last-child)]:border-b',
                'md:[&:not(:last-child)]:border-b-0 xl:[&:not(:last-child)]:border-b',
                '[&:not(:last-child)]:border-gray-300 [&:not(:last-child)]:dark:border-gray-800',
                'py-6 md:px-6 md:py-0 xl:px-0 xl:py-6'
              )}
              key={index}
              {...item}
              icon={item.icon as keyof typeof iconMap}
              index={index}
            />
          ))}
        </div>
        <div className="rounded-2xl border-gray-300 dark:border-gray-800 sm:border sm:p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                type="text"
                name="name"
                className="col-span-2 xl:col-span-1"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                className="col-span-2 xl:col-span-1"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <Textarea
              name="message"
              placeholder="Message"
              rows={5}
              resizable={false}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="flex w-full justify-center md:justify-start">
              <Button
                className="w-full md:w-auto"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal for Success/Error Messages */}
      <ModalOrDrawer
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        className="max-w-lg"
      >
        <Heading
          level={2}
          className="mb-4 text-2xl text-text-primary md:text-3xl"
        >
          {modalType === 'success' ? 'Message sent!' : 'There was an error.'}
        </Heading>
        <p className="pb-8 text-lg text-text-primary md:pb-2">{modalMessage}</p>
      </ModalOrDrawer>
    </SectionWrapper>
  );
};

export default ContactSection;
