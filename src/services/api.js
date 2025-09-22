// API configuration and endpoints
const API_BASE_URL = 'https://api.kidsfeed.org'; // Replace with your actual API URL

export const API_ENDPOINTS = {
  MEALS: '/api/meals',
  DONATIONS: '/api/donations',
  SCHOOLS: '/api/schools',
  STATS: '/api/stats',
};

// API helper functions
export const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(url, { ...defaultOptions, ...options });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// Specific API calls
export const mealAPI = {
  getMeals: () => apiRequest(API_ENDPOINTS.MEALS),
  updateMeals: (data) => apiRequest(API_ENDPOINTS.MEALS, {
    method: 'POST',
    body: JSON.stringify(data),
  }),
};

export const donationAPI = {
  getDonations: () => apiRequest(API_ENDPOINTS.DONATIONS),
  createDonation: (donation) => apiRequest(API_ENDPOINTS.DONATIONS, {
    method: 'POST',
    body: JSON.stringify(donation),
  }),
};

export const schoolAPI = {
  getSchools: () => apiRequest(API_ENDPOINTS.SCHOOLS),
  getSchoolStats: (schoolId) => apiRequest(`${API_ENDPOINTS.SCHOOLS}/${schoolId}/stats`),
};

export const statsAPI = {
  getOverallStats: () => apiRequest(API_ENDPOINTS.STATS),
};