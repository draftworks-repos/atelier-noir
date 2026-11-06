export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  tattooStyle: string;
  preferredArtist: string;
  tattooSize: string;
  placement: string;
  description: string;
  preferredDate: string;
  referenceFile?: File | null;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateBookingForm(data: Partial<BookingFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters)';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address';
  }

  const cleanPhone = (data.phone || '').replace(/[\s\-\(\)\.]/g, '');
  if (!data.phone || cleanPhone.length < 7) {
    errors.phone = 'Please provide a valid contact phone number';
  }

  if (!data.tattooStyle || data.tattooStyle === '') {
    errors.tattooStyle = 'Please select a preferred tattoo style';
  }

  if (!data.tattooSize || data.tattooSize === '') {
    errors.tattooSize = 'Please select an approximate tattoo size';
  }

  if (!data.placement || data.placement.trim().length < 2) {
    errors.placement = 'Please describe your intended body placement (e.g. Forearm, Ribs)';
  }

  if (!data.description || data.description.trim().length < 10) {
    errors.description = 'Please provide at least 10 characters describing your idea or concept';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function generateBookingReference(prefix = 'ATN'): string {
  const randomChars = Math.random().toString(36).substring(2, 7).toUpperCase();
  const year = new Date().getFullYear();
  return `${prefix}-${year}-${randomChars}`;
}

export function estimateSessionHours(size: string, style: string): { hours: string; deposit: number } {
  const normalizedSize = (size || '').toLowerCase();
  
  if (normalizedSize.includes('small') || normalizedSize.includes('micro')) {
    return { hours: '1 – 2 hours', deposit: 100 };
  }
  if (normalizedSize.includes('medium') || normalizedSize.includes('palm')) {
    return { hours: '3 – 4 hours', deposit: 150 };
  }
  if (normalizedSize.includes('sleeve') || normalizedSize.includes('backpiece')) {
    return { hours: 'Multiple sessions (6+ hours/day)', deposit: 400 };
  }
  if (normalizedSize.includes('large') || normalizedSize.includes('forearm')) {
    return { hours: '4 – 6 hours', deposit: 250 };
  }

  return { hours: 'To be determined during consultation', deposit: 150 };
}

export function filterGalleryItems<T extends { style: string; artist: string; tags?: string[] }>(
  items: T[],
  activeFilter: string
): T[] {
  if (!activeFilter || activeFilter === 'All Work' || activeFilter === 'All') {
    return items;
  }
  const filterLower = activeFilter.toLowerCase();
  return items.filter(
    (item) =>
      item.style.toLowerCase() === filterLower ||
      (item.tags && item.tags.some((tag) => tag.toLowerCase() === filterLower))
  );
}
