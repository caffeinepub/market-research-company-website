import Set "mo:core/Set";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  type Inquiry = {
    name : Text;
    email : Text;
    company : Text;
    message : Text;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      compareHelper(
        inquiry1.name,
        inquiry2.name,
        inquiry1.email,
        inquiry2.email,
        inquiry1.company,
        inquiry2.company,
        inquiry1.message,
        inquiry2.message,
      );
    };

    func compareHelper(name1 : Text, name2 : Text, email1 : Text, email2 : Text, company1 : Text, company2 : Text, message1 : Text, message2 : Text) : Order.Order {
      switch (Text.compare(name1, name2)) {
        case (#less) { #less };
        case (#greater) { #greater };
        case (#equal) {
          switch (Text.compare(email1, email2)) {
            case (#less) { #less };
            case (#greater) { #greater };
            case (#equal) {
              switch (Text.compare(company1, company2)) {
                case (#less) { #less };
                case (#greater) { #greater };
                case (#equal) { Text.compare(message1, message2) };
              };
            };
          };
        };
      };
    };
  };

  module InquirySet {
    public func toArray(set : Set.Set<Inquiry>) : [Inquiry] {
      set.values().toArray();
    };
  };

  let inquiries = Set.empty<Inquiry>();

  public func submitContactForm(name : Text, email : Text, company : Text, message : Text) : async () {
    if (message.isEmpty()) { Runtime.trap("Inquiry cannot be empty.") };
    let inquiry : Inquiry = {
      name;
      email;
      company;
      message;
    };
    inquiries.add(inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.toArray();
  };

  public func deleteInquiry(inquiry : Inquiry) : async () {
    if (not inquiries.contains(inquiry)) {
      Runtime.trap("Inquiry has already been deleted.");
    };
    inquiries.remove(inquiry);
  };
};
