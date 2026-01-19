// Bilingual Content Data
// All website content in Hindi (default) and English

const content = {
  hindi: {
    header: {
      langToggle: 'English'
    },
    hero: {
      title: 'खेत से ताज़ा, सर्वोत्तम गुणवत्ता का एम.पी. गेहूं',
      subtitle: 'रीवा, मध्य प्रदेश से प्रीमियम चक्की आटा',
      cta: 'संपर्क करें'
    },
    about: {
      heading: 'हमारे बारे में',
      paragraph1: 'विष्णु भोग चक्की आटा रीवा, मध्य प्रदेश में स्थित एक विश्वसनीय आटा चक्की है। हम स्थानीय किसानों से सीधे उच्च गुणवत्ता वाले गेहूं की खरीद करते हैं और ताज़ा पिसाई सुनिश्चित करते हैं।',
      paragraph2: 'मध्य प्रदेश अपने उत्कृष्ट गेहूं के लिए प्रसिद्ध है, और हम इसी गुणवत्ता को आपके घर तक पहुंचाने के लिए प्रतिबद्ध हैं। हमारी प्रक्रिया सरल है - किसानों से ताज़ा गेहूं, तुरंत पिसाई, और सीधे आपके पास।'
    },
    product: {
      heading: 'हमारा उत्पाद',
      name: 'विष्णु भोग चक्की आटा - एम.पी. साबुत गेहूं',
      featuresHeading: 'मुख्य विशेषताएं',
      features: [
        '100% साबुत गेहूं',
        'अधिक पानी सोखता है',
        'रोटियाँ लंबे समय तक नरम रहती हैं',
        'FSSAI प्रमाणित',
        'ताज़ा पिसाई'
      ],
      packagingHeading: 'उपलब्ध पैकेजिंग',
      packagingSizes: '5 किलो, 10 किलो, 50 किलो',
      futureProducts: 'हम जल्द ही अधिक उत्पाद लॉन्च करेंगे। अपडेट के लिए जुड़े रहें!'
    },
    whyChoose: {
      heading: 'हमें क्यों चुनें?',
      reasons: [
        {
          title: 'मध्य प्रदेश का प्रीमियम गेहूं',
          description: 'मध्य प्रदेश के बेहतरीन गेहूं उगाने वाले क्षेत्रों से प्राप्त'
        },
        {
          title: 'किसानों से सीधे',
          description: 'स्थानीय कृषि का समर्थन, ताज़गी सुनिश्चित'
        },
        {
          title: 'ताज़ा प्रसंस्करण',
          description: 'लंबे समय तक भंडारण नहीं - ताज़गी का स्वाद'
        },
        {
          title: 'गुणवत्ता की गारंटी',
          description: 'FSSAI प्रमाणित, परिवारों और व्यवसायों द्वारा विश्वसनीय'
        },
        {
          title: 'स्थानीय जड़ें',
          description: 'रीवा में स्थित, मध्य प्रदेश और उससे आगे की सेवा'
        }
      ]
    },
    whoWeServe: {
      heading: 'हम किसकी सेवा करते हैं',
      subheading: 'चाहे आप व्यक्तिगत खरीदार हों या B2B ग्राहक, हम आपकी सेवा के लिए तैयार हैं।',
      customers: [
        {
          title: 'परिवार और घरेलू उपयोग',
          description: 'आपकी रोज़ की रोटियों के लिए ताज़ा, स्वस्थ आटा'
        },
        {
          title: 'रेस्टोरेंट और खाद्य व्यवसाय',
          description: 'थोक आपूर्ति, लगातार गुणवत्ता'
        },
        {
          title: 'वितरक और थोक विक्रेता',
          description: 'साझेदारी के अवसर उपलब्ध'
        },
        {
          title: 'आपूर्तिकर्ता',
          description: 'किसान और आपूर्तिकर्ता जुड़ने के लिए स्वागत है'
        }
      ]
    },
    trust: {
      heading: 'प्रमाणपत्र और पंजीकरण',
      fssai: {
        title: 'FSSAI लाइसेंस',
        description: 'खाद्य सुरक्षा मानकों के अनुसार प्रमाणित'
      },
      registration: {
        title: 'व्यवसाय पंजीकरण',
        description: 'मध्य प्रदेश में पंजीकृत इकाई'
      },
      quality: {
        title: 'गुणवत्ता मानक',
        description: 'खाद्य सुरक्षा मानदंडों का पालन'
      }
    },
    contact: {
      heading: 'संपर्क करें',
      subheading: 'हम आपसे सुनना पसंद करेंगे!',
      phone: 'फ़ोन',
      whatsapp: 'WhatsApp',
      email: 'ईमेल',
      address: 'पता',
      addressText: 'विष्णु भोग चक्की आटा, रीवा, मध्य प्रदेश, भारत',
      whatsappMessage: 'नमस्ते, मैं विष्णु भोग चक्की आटा के बारे में जानकारी चाहता/चाहती हूँ।'
    },
    footer: {
      copyright: '© 2026 विष्णु भोग चक्की आटा। सर्वाधिकार सुरक्षित।',
      location: 'रीवा, मध्य प्रदेश, भारत',
      links: {
        about: 'हमारे बारे में',
        products: 'उत्पाद',
        contact: 'संपर्क'
      }
    }
  },
  english: {
    header: {
      langToggle: 'हिंदी'
    },
    hero: {
      title: 'Fresh from the Farm, The Best Quality M.P. Wheat',
      subtitle: 'Premium Chakki Atta from Rewa, Madhya Pradesh',
      cta: 'Contact Us'
    },
    about: {
      heading: 'About Us',
      paragraph1: 'Vishnu Bhog Chakki Atta is a trusted flour mill based in Rewa, Madhya Pradesh. We source premium quality wheat directly from local farmers and ensure fresh processing without long-term storage.',
      paragraph2: 'Madhya Pradesh is renowned for its superior wheat quality, and we are committed to bringing this excellence to your kitchen. Our process is simple: fresh wheat from farmers, immediate milling, and straight to you.'
    },
    product: {
      heading: 'Our Product',
      name: 'Vishnu Bhog Chakki Atta - M.P. Whole Wheat',
      featuresHeading: 'Key Features',
      features: [
        '100% Whole Wheat',
        'Absorbs More Water',
        'Rotis Stay Soft for Longer',
        'FSSAI Certified',
        'Freshly Milled'
      ],
      packagingHeading: 'Available Packaging',
      packagingSizes: '5kg, 10kg, 50kg',
      futureProducts: 'More products coming soon. Stay tuned for updates!'
    },
    whyChoose: {
      heading: 'Why Choose Us?',
      reasons: [
        {
          title: 'Premium M.P. Wheat',
          description: 'Sourced from Madhya Pradesh\'s finest wheat-growing regions'
        },
        {
          title: 'Direct from Farmers',
          description: 'Supporting local agriculture, ensuring freshness'
        },
        {
          title: 'Fresh Processing',
          description: 'No long-term storage - freshness you can taste'
        },
        {
          title: 'Quality Guaranteed',
          description: 'FSSAI certified, trusted by families and businesses'
        },
        {
          title: 'Local Roots',
          description: 'Based in Rewa, serving Madhya Pradesh and beyond'
        }
      ]
    },
    whoWeServe: {
      heading: 'Who We Serve',
      subheading: 'Whether you\'re a retail customer or B2B client, we\'re here to serve you.',
      customers: [
        {
          title: 'Families & Households',
          description: 'Fresh, healthy atta for your daily rotis'
        },
        {
          title: 'Restaurants & Food Businesses',
          description: 'Bulk supply, consistent quality'
        },
        {
          title: 'Distributors & Wholesalers',
          description: 'Partnership opportunities available'
        },
        {
          title: 'Suppliers',
          description: 'Farmers and suppliers welcome to connect'
        }
      ]
    },
    trust: {
      heading: 'Certifications & Registration',
      fssai: {
        title: 'FSSAI License',
        description: 'Certified according to food safety standards'
      },
      registration: {
        title: 'Business Registration',
        description: 'Registered entity in Madhya Pradesh'
      },
      quality: {
        title: 'Quality Standards',
        description: 'Adhering to food safety norms'
      }
    },
    contact: {
      heading: 'Contact Us',
      subheading: 'We\'d love to hear from you!',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      email: 'Email',
      address: 'Address',
      addressText: 'Vishnu Bhog Chakki Atta, Rewa, Madhya Pradesh, India',
      whatsappMessage: 'Hello, I would like to know more about Vishnu Bhog Chakki Atta.'
    },
    footer: {
      copyright: '© 2026 Vishnu Bhog Chakki Atta. All Rights Reserved.',
      location: 'Rewa, Madhya Pradesh, India',
      links: {
        about: 'About',
        products: 'Products',
        contact: 'Contact'
      }
    }
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = content;
}
