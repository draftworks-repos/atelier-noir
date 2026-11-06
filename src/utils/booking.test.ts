import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateBookingForm,
  generateBookingReference,
  estimateSessionHours,
  filterGalleryItems,
} from './booking.ts';

test('validateBookingForm detects missing required fields', () => {
  const result = validateBookingForm({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.tattooStyle);
  assert.ok(result.errors.tattooSize);
  assert.ok(result.errors.placement);
  assert.ok(result.errors.description);
});

test('validateBookingForm accepts valid complete data', () => {
  const result = validateBookingForm({
    fullName: 'Alexander Wright',
    email: 'alexander@example.com',
    phone: '555-123-4567',
    tattooStyle: 'Fine Line',
    preferredArtist: 'Elena Rostova',
    tattooSize: 'Medium (Palm sized)',
    placement: 'Inner Forearm',
    description: 'A delicate botanical branch intertwined with geometric star charts.',
    preferredDate: '2026-11-20',
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('generateBookingReference formats code correctly', () => {
  const ref = generateBookingReference('ATN');
  assert.ok(ref.startsWith('ATN-'));
  assert.ok(ref.length >= 10);
});

test('estimateSessionHours computes proper estimates', () => {
  const small = estimateSessionHours('Small (1-2 inches)', 'Fine Line');
  assert.equal(small.deposit, 100);

  const sleeve = estimateSessionHours('Full Sleeve / Large Canvas', 'Realism');
  assert.equal(sleeve.deposit, 400);
});

test('filterGalleryItems filters accurately', () => {
  const mockItems = [
    { id: 1, title: 'Piece 1', style: 'Realism', artist: 'Marcus', tags: ['Realism'] },
    { id: 2, title: 'Piece 2', style: 'Fine Line', artist: 'Elena', tags: ['Fine Line', 'Botanical'] },
    { id: 3, title: 'Piece 3', style: 'Blackwork', artist: 'Kai', tags: ['Blackwork'] },
  ];

  assert.equal(filterGalleryItems(mockItems, 'All Work').length, 3);
  assert.equal(filterGalleryItems(mockItems, 'Fine Line').length, 1);
  assert.equal(filterGalleryItems(mockItems, 'Fine Line')[0].id, 2);
  assert.equal(filterGalleryItems(mockItems, 'Botanical').length, 1);
});
