import { useState, useEffect } from "react";
import axios from "../../axios";
import { processError } from "../../lib/utils";

const useUsers = (url, currentPage = 1) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}?page=${currentPage}`);
      setData(data?.data);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  return { loading, data, pagination };
};
const useRevenue = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getRevenue = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}`);
      setData(data?.result);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getRevenue();
  }, []);

  return { loading, data, pagination };
};
const useNotification = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getRevenue = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}`);
      setData(data?.data);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getRevenue();
  }, []);

  return { loading, data, pagination };
};

const useVouchers = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getVouchers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}`);
      setData(data?.result);
      setPagination(data?.pagination);
    } catch (error) {
      processError(
        error?.response?.data?.error || error?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getVouchers();
  }, []);

  return { loading, data, pagination, getVouchers };
};

const useReportedUsers = (url, activeTab) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getReportedUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}?type=${activeTab}`);
      setData(data?.result);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReportedUsers();
  }, [activeTab]);

  return { loading, data, pagination };
};

export { useUsers, useReportedUsers, useRevenue, useNotification, useVouchers };
